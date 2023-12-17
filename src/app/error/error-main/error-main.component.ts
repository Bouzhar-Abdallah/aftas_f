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
      state('show', style({
        
        opacity: '100%'
      })),
      state('hide', style({
        opacity: '0%'
      })),
      transition('show => hide', [
        animate('0.7s 0.0s ease-in')
      ]),
      transition('hide => show', [
        animate('0.3s 0.0s ease-out')
      ]),
    ]),
  ]
})
export class ErrorMainComponent {
  constructor(private eventsService: EventsService) {}

  isVisible: boolean = false;
  errorOccured$: Observable<string| any> = this.eventsService.errorOcured$;
  errorText!: string;
  ngOnInit() {
    this.eventsService.errorOcured$.subscribe((error) => {
      this.isVisible = true;
      setTimeout(()=>{
        this.isVisible = false;
      },3000)
      this.errorText = error;
    });
    
    /* this.eventsService.eventEmitted$.subscribe((event) =>{
      if (typeof event === 'object' && event.success) {
        this.isVisible = true;
      }
      
    }); */
  }

}
