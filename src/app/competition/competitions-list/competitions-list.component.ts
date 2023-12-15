import { Component } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import {
  Competition,
  CompetitionStatus,
} from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/service/competition.service';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css'],
})
export class CompetitionsListComponent {
  constructor(
    private competitionService: CompetitionService,
    private eventsService: EventsService
  ) {}

  competitions$ = this.competitionService.getCompetitions().pipe(
    map((competitions) =>
      competitions.map((competition) => {
        // convert date to Date object
        competition.date = new Date(competition.date);

        if (
          competition.startTime &&
          typeof competition.startTime === 'string'
        ) {
          let [hours, minutes] = competition.startTime.split(':');
          competition.date.setHours(+hours, +minutes, 0, 0);
          competition.startTime = competition.date;
        }
        if (competition.endTime && typeof competition.endTime === 'string') {
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

        if (
          currentDate < competition.endTime &&
          currentDate > competition.startTime
        ) {
          
          competition.status = CompetitionStatus.inProgress;
          competition.huntOpen = true;
        } else {
          competition.huntOpen = false;
        }
        // here
        if (
          currentDate < (new Date(new Date(competition.startTime).getTime() - 24*60*60*1000) )
        ) {
          
          competition.status = CompetitionStatus.inProgress;
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
          competition.status = CompetitionStatus.today;
          competition.displayDate = "Aujourd'hui";
        } else if (competition.date < currentDate) {
          //past
          competition.status = CompetitionStatus.past;
        } else {
          competition.status = CompetitionStatus.future;
        }
        //console.log(competition)
        return competition;
      })
    )
  );

  selectCompetition(competition: Competition) {
    this.eventsService.emitCompetitionSelected(competition);
  }
  ngOnInit(): void {
    /*     this.competitionService.getCompetitions().subscribe((data) => {
      console.log(data);
    }); */
  }
}
