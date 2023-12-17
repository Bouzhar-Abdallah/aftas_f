import { Component, EventEmitter, Output } from '@angular/core';
import { Competition } from './models/competition.model';
import { EventsService } from './service/events.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private eventsService: EventsService){}
  title = 'aftas club';
  
  selectedCompetition$ = this.eventsService.competitionSelected$;

  onOpen() {
    this.eventsService.emitEvent('_openCompititionForm');
  }
  
  
  onClose(){
    this.eventsService.emitEvent('_closeCompititionForm');
  }
  
  ngOnInit(){
  }

}
