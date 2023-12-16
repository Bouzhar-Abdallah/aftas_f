import { Component } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '0px'
      })),
      state('closed', style({
        left: '-384px'
      })),
      transition('open => closed', [
        animate('0.3s 0.0s ease-in')
      ]),
      transition('closed => open', [
        animate('0.3s 0.0s ease-out')
      ]),
    ]),
  ]
})
export class MemberListComponent {
isOpen = false;
  constructor(private eventsService: EventsService) {}
ngOnInit(){    this.eventsService.eventEmitted$.subscribe((event) => {
  if (event === '_openMemberList') {
    this.isOpen = true;
  }
  if (event === '_closeMemberList') {
    this.isOpen = false;
  }
});}

emmitCloseMembersListEvent(){
  this.eventsService.emitEvent('_closeMemberList');
}
}
