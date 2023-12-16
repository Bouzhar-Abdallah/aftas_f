import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competition } from '../models/competition.model';
import { Member } from '../models/member.model';
import { Dialog } from '../models/dialog.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private eventEmitted = new Subject<string>();
  private competitionSelected = new Subject<Competition>();
  private participantSelected = new Subject<Member>();
  private errorOcured = new Subject<string>();
  
  eventEmitted$ = this.eventEmitted.asObservable();
  competitionSelected$ = this.competitionSelected.asObservable();
  participantSelected$ = this.participantSelected.asObservable();
  errorOcured$ = this.errorOcured.asObservable();

  emitEvent(event: string) {
    this.eventEmitted.next(event);
  }
  emitCompetitionSelected(selectedCompetition: Competition) {
    this.competitionSelected.next(selectedCompetition);
  }
  emitParticipantSelected(selectedMember: Member) {
    this.participantSelected.next(selectedMember);
  }
  emitError(error: string) {
    this.errorOcured.next(error);
  }
}