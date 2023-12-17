import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { EventsService } from 'src/app/service/events.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
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
          scale: '0.9'
        })
      ),
      transition('open => closed', [animate('0.2s 0.0s ease-in')]),
      transition('closed => open', [animate('0.3s 0.0s ease-out')]),
    ]),
  ],
})
export class GameListComponent {
  constructor(
    private eventsService: EventsService
  ) {}
  isOpen = false;

  ngOnInit() {
    this.eventsService.eventEmitted$.subscribe((event) => {
      if (event === '_openGameList') {
        this.isOpen = true;
      }
      if (event === '_closeGameList') {
        this.isOpen = false;
      }
    });
  }
  CloseMembersList() {
    this.isOpen = false;
    this.eventsService.emitEvent('_closeGameList');
  }
}
