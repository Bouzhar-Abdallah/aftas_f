import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competition } from '../models/competition.model';
import { Member } from '../models/member.model';
import { Dialog } from '../models/dialog.model';
import { CompetitionService } from './competition.service';
import { Ranking } from '../models/ranking.model';
import { Fish } from '../models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private eventEmitted = new Subject<string>();
  private competitionSelected = new Subject<Competition>();
  private participantAdded = new Subject<Ranking>();
  private messageEmitted = new Subject<Dialog>();
  private fishSelected = new Subject<Fish>();
  private participantSelected = new Subject<Member>();
  
  eventEmitted$ = this.eventEmitted.asObservable();
  competitionSelected$ = this.competitionSelected.asObservable();
  participantAdded$ = this.participantAdded.asObservable();
  messageEmitted$ = this.messageEmitted.asObservable();
  fishSelected$ = this.fishSelected.asObservable();
  memberSelected$ = this.participantSelected.asObservable();

  emitEvent(event: string) {
    this.eventEmitted.next(event);
  }
  emitCompetitionSelected(selectedCompetition: Competition) {
    this.competitionSelected.next(selectedCompetition);
  }
  emitCompetitionUpdated(updatedCompetition: Competition) {
    this.competitionSelected.next(updatedCompetition);
  }
  emitParticipantAdded(AddedMember: Ranking) {
    this.participantAdded.next(AddedMember);
  }
  emitMessage(message: Dialog) {
    this.messageEmitted.next(message);
  }
  emitFishSelected(selectedFish: Fish) {
    this.fishSelected.next(selectedFish);
  }
  emitParticipantSelected(selectedMember: Member) {
    this.participantSelected.next(selectedMember);
  }
}