import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Participation_Req, Ranking } from '../models/ranking.model';
import { EMPTY, Observable, Subject, catchError, of, throwError } from 'rxjs';
import { EventsService } from './events.service';
import { Member } from '../models/member.model';
import { Competition } from '../models/competition.model';
import { Dialog } from '../models/dialog.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(private http:HttpClient, private eventsService: EventsService) { }

  private addparticipantUrl = API_URL + '/ranking/addparticipant';
  private participationsUrl = API_URL + '/ranking/';

  addParticipation(competition:Competition,member:Member){

    this.http.post<Ranking>(this.addparticipantUrl, new Participation_Req(competition.code, member.num)).pipe(
      catchError( error =>{
        console.log('catched')
        if (error) {
          
          this.eventsService.emitMessage(new Dialog('','error',`echec d'enregistrement : le membre num: ${member.num} est d'eja insrit`))
        }
        return EMPTY; // return Observable
      })
      ).subscribe((ranking:Ranking)=>{
        console.log('from participations servic' , ranking)
        this.eventsService.emitParticipantAdded(ranking)
        this.eventsService.emitMessage(new Dialog('','success',` ${member.name} est insrit avec success`))
    });
  }
}
