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
  selectedCompetition!: Competition;

  competitions$ = this.competitionService.getCompetitions();

  selectCompetition(competition: Competition) {
    this.selectedCompetition = competition;
    this.eventsService.emitCompetitionSelected(competition);
  }
  ngOnInit(): void {
    /*     this.competitionService.getCompetitions().subscribe((data) => {
      console.log(data);
    }); */
  }
}
