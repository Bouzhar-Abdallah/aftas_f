import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/API_URL';
import { Observable, catchError, throwError } from 'rxjs';
import { Competition } from '../models/competition.model';
import { EventsService } from './events.service';
import { tap, map } from 'rxjs';
import { CompetitionStatus } from '../models/competition.model';
@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient, private eventsService: EventsService) {}
  private competitionUrl = API_URL + '/competition';
selectedCompetition!: Competition;
  getCompetitions(): Observable<Competition[]> {
    return this.http
      .get<Competition[]>(this.competitionUrl)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .pipe(
        map((competitions) =>
          competitions.map((competition) => this.handleCompetitionFormat(competition))
        )
      );
  }

  getCompetition(competition_code: string): Observable<Competition> {
    return this.http.get<Competition>(
      this.competitionUrl.concat('/').concat(competition_code)
    ).pipe(
      map((competition)=> this.handleCompetitionFormat(competition))
    );
  }

  createCompetition(competition: Competition): Observable<Competition> {
    if (typeof competition.date === 'string') {
      competition.code = competition.location
        .slice(0, 3)
        .concat(
          '-',
          competition.date.slice(2, 4),
          '-',
          competition.date.slice(5, 7),
          '-',
          competition.date.slice(8, 10)
        );
    }

    return this.http.post<Competition>(this.competitionUrl, competition).pipe(
      catchError((error) => {
        this.eventsService.emitError(
          `echec d'enregistrement : location format incorecte`
        );
        return throwError(() => error);
      })
    );
  }

  handleCompetitionFormat(competition:Competition){
    competition.date = new Date(competition.date);

    if (
      competition.startTime &&
      typeof competition.startTime === 'string'
    ) {
      let [hours, minutes] = competition.startTime.split(':');
      competition.date.setHours(+hours, +minutes, 0, 0);
      competition.startTime = competition.date;
    }
    if (
      competition.endTime &&
      typeof competition.endTime === 'string'
    ) {
      let endTime = new Date();
      let [hours, minutes] = competition.endTime.split(':');

      endTime.setDate(competition.date.getDate());
      endTime.setHours(+hours, +minutes, 0, 0);
      competition.endTime = endTime;
    }

    let options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    competition.displayDate = competition.date.toLocaleDateString(
      'fr-FR',
      options
    );

    let currentDate = new Date();

    // during the game
    if (
      currentDate < competition.endTime &&
      currentDate > competition.startTime
    ) {
      competition.status = CompetitionStatus.duringPlay;
      competition.huntOpen = true;
    } else {
      competition.huntOpen = false;
    }

    // waiting to start
    if (
      currentDate <
      new Date(
        new Date(competition.startTime).getTime() - 24 * 60 * 60 * 1000
      )
    ) {
      competition.status = CompetitionStatus.duringPlay;
      competition.inscriptionOpen = true;
    } else {
      competition.inscriptionOpen = false;
      competition.status = CompetitionStatus.waitingToStart;
    }

    if (
      competition.date.getDate() === currentDate.getDate() &&
      competition.date.getMonth() === currentDate.getMonth() &&
      competition.date.getFullYear() === currentDate.getFullYear()
    ) {
      //today
      //competition.status = CompetitionStatus.today;
      competition.displayDate = "Aujourd'hui";
    } else if (competition.date < currentDate) {
      //past
      competition.status = CompetitionStatus.past;
    } else {
      competition.status = CompetitionStatus.openSubscription;
    }
    /*  */

    // open subscription
    if (
      currentDate <
      new Date(
        new Date(competition.startTime).getTime() - 24 * 60 * 60 * 1000
      )
    ) {
      competition.status = CompetitionStatus.openSubscription;
    } else if (currentDate < competition.startTime) {
      competition.status = CompetitionStatus.waitingToStart;
    } else if (currentDate < competition.endTime) {
      competition.status = CompetitionStatus.duringPlay;
    } else {
      competition.status = CompetitionStatus.past;
    }

    return competition;
  }
}
