import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competition } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private eventEmitted = new Subject<string>();

  eventEmitted$ = this.eventEmitted.asObservable();
  
  emitEvent(event: string) {
    this.eventEmitted.next(event);
  }

  private competitionSelected = new Subject<Competition>();

  competitionSelected$ = this.competitionSelected.asObservable();
  
  emitCompetitionSelected(selectedCompetition: Competition) {
    this.competitionSelected.next(selectedCompetition);
  }
}
