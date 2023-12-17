import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/service/competition.service';
import { EventsService } from 'src/app/service/events.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-competition-main',
  templateUrl: './competition-main.component.html',
  styleUrls: ['./competition-main.component.css']
})
export class CompetitionMainComponent {

  constructor(private eventsService: EventsService,private _location: Location) {}

  selectedCompetition$ = this.eventsService.competitionSelected$;

  emmitOpenMembersListEvent(){
    this.eventsService.emitEvent('_openMemberList');
  }

  ngOnInit(): void {
    this.eventsService.competitionSelected$.subscribe((competition: Competition) => {
      this._location.go(competition.code)
      
    })
  }

}
