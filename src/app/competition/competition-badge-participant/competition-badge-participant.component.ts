import { Component, Input } from '@angular/core';
import { Ranking } from 'src/app/models/ranking.model';

@Component({
  selector: 'app-competition-badge-participant',
  templateUrl: './competition-badge-participant.component.html',
  styleUrls: ['./competition-badge-participant.component.css']
})
export class CompetitionBadgeParticipantComponent {
@Input() ranking!: Ranking;
}
