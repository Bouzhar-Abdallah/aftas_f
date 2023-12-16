import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Participation_Req } from '../models/ranking.model';
import { Observable, Subject, catchError, of, throwError } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(private http:HttpClient, private eventsService: EventsService) { }

  private addparticipantUrl = API_URL + '/ranking/addparticipant';
  private participationsUrl = API_URL + '/ranking/';

  addParticipation(participation: Participation_Req){
    return this.http.post(this.addparticipantUrl, participation).pipe(
      catchError( error =>{
        this.eventsService.emitError(`echec d'enregistrement : le membre num: ${participation.member_num} est d'eja insrit`)
        return of(error); // return Observable
      })
    ).subscribe()
  }
}
