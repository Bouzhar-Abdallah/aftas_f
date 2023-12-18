import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Hunt_Req } from '../models/hunt.model';
import { EMPTY, Observable, catchError } from 'rxjs';
import { EventsService } from './events.service';
import { Dialog } from '../models/dialog.model';

@Injectable({
  providedIn: 'root',
})
export class HuntService {
  constructor(private http: HttpClient, private eventsService: EventsService) {}
  HUNT_URL = API_URL + '/hunting';
  huntAdded$ = new Observable<Hunt_Req>();
  addHunt(hunt_req: Hunt_Req) {
    console.log(hunt_req)
    this.http
      .post<Hunt_Req>(this.HUNT_URL, hunt_req)
      .pipe(
        catchError( error =>{
          console.log(error)
          if (error) {
            
            this.eventsService.emitMessage(new Dialog('','error',error.error))
          }
          return EMPTY; // return Observable
        })
        )
      .subscribe((hunt_req: Hunt_Req) => {
        console.log('service: ', hunt_req)
        this.eventsService.emitEvent('_huntAdded');
        this.eventsService.emitMessage(
          new Dialog(
            '',
            'success',
            ` ${hunt_req.numberOfFish} poissons ajouté avec success`
          )
        );
      });
  }
}
