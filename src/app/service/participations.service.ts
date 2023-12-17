import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Participation_Req } from '../models/ranking.model';
import { Observable, Subject, catchError, of, throwError } from 'rxjs';
import { EventsService } from './events.service';
import { Member } from '../models/member.model';
import { Competition } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(private http:HttpClient, private eventsService: EventsService) { }

  private addparticipantUrl = API_URL + '/ranking/addparticipant';
  private participationsUrl = API_URL + '/ranking/';

  addParticipation(competition:Competition,member:Member):Observable<any>{

    return this.http.post(this.addparticipantUrl, new Participation_Req(competition.code, member.num)).pipe(
      catchError( error =>{
        if (error) {
          this.eventsService.emitError(`echec d'enregistrement : le membre num: ${member.num} est d'eja insrit`)
        }
        return of(error); // return Observable
      })
    );
  }
}
