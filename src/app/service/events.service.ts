import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competition } from '../models/competition.model';
import { Member } from '../models/member.model';
import { Dialog } from '../models/dialog.model';
import { CompetitionService } from './competition.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private eventEmitted = new Subject<string>();
  private competitionSelected = new Subject<Competition>();
  private participantAdded = new Subject<Member>();
  private errorOcured = new Subject<string>();
  
  eventEmitted$ = this.eventEmitted.asObservable();
  competitionSelected$ = this.competitionSelected.asObservable();
  participantAdded$ = this.participantAdded.asObservable();
  errorOcured$ = this.errorOcured.asObservable();

  emitEvent(event: string) {
    this.eventEmitted.next(event);
  }
  emitCompetitionSelected(selectedCompetition: Competition) {
    this.competitionSelected.next(selectedCompetition);
  }
  emitCompetitionUpdated(updatedCompetition: Competition) {
    this.competitionSelected.next(updatedCompetition);
  }
  emitParticipantAdded(AddedMember: Member) {
    this.participantAdded.next(AddedMember);
  }
  emitError(error: string) {
    this.errorOcured.next(error);
  }
}