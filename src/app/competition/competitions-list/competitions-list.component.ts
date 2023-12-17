import { Component } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
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
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: '0px',
        })
      ),
      state(
        'closed',
        style({
          left: '-384px',
          scale: '0.9'
        })
      ),
      transition('open => closed', [animate('0.2s 0.0s ease-in')]),
      transition('closed => open', [animate('0.3s 0.0s ease-out')]),
    ]),
  ],
})
export class CompetitionsListComponent {
  constructor(
    private competitionService: CompetitionService,
    private eventsService: EventsService
  ) {}
  selectedCompetition!: Competition;
  isOpen = true;

  competitions$ = this.competitionService.getCompetitions();
  competitions: Competition[] = [];
  selectCompetition(competition: Competition) {
    this.selectedCompetition = competition;
    this.eventsService.emitCompetitionSelected(competition);
  }
  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((data) => {
      this.competitions = data;
    });
    this.eventsService.participantAdded$.subscribe((ranking) => {
      this.competitions.map((competition) => {
        if (competition.code === ranking.competition?.code) {
          competition.rankings.push(ranking);
        }
      })
    });
    this.eventsService.eventEmitted$.subscribe((event) => {
      if (event === '_openGameList' || event === '_openMemberList') {
        this.isOpen = false;
      }
      if (event === '_closeGameList' || event === '_closeMemberList') {
        this.isOpen = true;
      }
    });
  }

  
}
