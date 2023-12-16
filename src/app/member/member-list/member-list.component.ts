import { Component } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/service/member.service';
import { Competition } from 'src/app/models/competition.model';
import { ParticipationsService } from 'src/app/service/participations.service';
import { Participation_Req } from 'src/app/models/ranking.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
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
        })
      ),
      transition('open => closed', [animate('0.3s 0.0s ease-in')]),
      transition('closed => open', [animate('0.3s 0.0s ease-out')]),
    ]),
  ],
})
export class MemberListComponent {
  constructor(
    private eventsService: EventsService,
    private memberService: MemberService,
    private participationsService: ParticipationsService
  ) {}
  isOpen = false;

  membersList$ = this.memberService.getMembers();
  selectedCompetition!: Competition;
  ngOnInit() {
    this.eventsService.eventEmitted$.subscribe((event) => {
      if (event === '_openMemberList') {
        this.isOpen = true;
      }
      if (event === '_closeMemberList') {
        this.isOpen = false;
      }
    });
    this.eventsService.competitionSelected$.subscribe((competition) => {
      this.selectedCompetition = competition;
    });
  }

  emmitCloseMembersListEvent() {
    this.eventsService.emitEvent('_closeMemberList');
  }

  addParticipant(member: Member) {

    this.participationsService.addParticipation(
      new Participation_Req(this.selectedCompetition.code, member.num)
    );
  }
}
