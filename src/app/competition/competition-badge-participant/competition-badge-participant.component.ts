import { Component, Input } from '@angular/core';
import { Ranking } from 'src/app/models/ranking.model';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-competition-badge-participant',
  templateUrl: './competition-badge-participant.component.html',
  styleUrls: ['./competition-badge-participant.component.css'],
})
export class CompetitionBadgeParticipantComponent {
  constructor(private eventsService: EventsService){}
  @Input() ranking!: Ranking;

  ngOnInit() {

  }
}
