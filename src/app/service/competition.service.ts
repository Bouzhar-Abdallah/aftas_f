import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/API_URL';
import { Observable, catchError, throwError } from 'rxjs';
import { Competition } from '../models/competition.model';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient, private eventsService: EventsService) { }
  private competitionUrl = API_URL + '/competition';

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.competitionUrl).pipe(
      catchError( error =>{
        
        return throwError(() => error);
      })
    );
  }

  createCompetition(competition: Competition): Observable<Competition>{
    console.log('create: ', competition)
    if (typeof competition.date === 'string') {
      competition.code = competition.location.slice(0,3).concat('-',competition.date.slice(2,4),'-',competition.date.slice(5,7),'-',competition.date.slice(8,10))
    }
    
    return this.http.post<Competition>(this.competitionUrl, competition).pipe(
      catchError( error =>{
        this.eventsService.emitError(`echec d'enregistrement : location format incorecte`)
        return throwError(() => error);
      })
    );;
  }
}
