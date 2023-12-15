import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-competition-main',
  templateUrl: './competition-main.component.html',
  styleUrls: ['./competition-main.component.css']
})
export class CompetitionMainComponent {

  constructor(private eventsService: EventsService) {}

  selectedCompetition$ = this.eventsService.competitionSelected$;

  ngOnInit(): void {
    this.eventsService.competitionSelected$.subscribe((item: Competition) => {
      console.log('from main', item.status)
    })
  }

}
