import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/service/events.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Dialog } from 'src/app/models/dialog.model';
@Component({
  selector: 'app-error-main',
  templateUrl: './error-main.component.html',
  styleUrls: ['./error-main.component.css'],
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          opacity: '100%',
        })
      ),
      state(
        'hide',
        style({
          opacity: '0%',
        })
      ),
      transition('show => hide', [animate('0.7s 0.0s ease-in')]),
      transition('hide => show', [animate('0.3s 0.0s ease-out')]),
    ]),
  ],
})
export class ErrorMainComponent {
  dialog: Dialog;
  constructor(private eventsService: EventsService) {
    this.dialog = new Dialog('', 'error', ''); 
  }

  isVisible: boolean = false;
  

  ngOnInit() {
    this.eventsService.messageEmitted$.subscribe((dialog: Dialog) => {
      
      this.isVisible = true;
      this.dialog = dialog;
      setTimeout(() => {
        this.isVisible = false;
        this.dialog = new Dialog('', 'error', '');
      }, 3000);
    });

    /* this.eventsService.eventEmitted$.subscribe((event) =>{
      if (typeof event === 'object' && event.success) {
        this.isVisible = true;
      }
      
    }); */
  }
}
