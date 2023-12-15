import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/API_URL';
import { Observable, catchError, throwError } from 'rxjs';
import { Competition } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }
  private competitionUrl = API_URL + '/competition';

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.competitionUrl).pipe(
      catchError( error =>{
        console.log(error)
        return throwError(() => error);
      })
    );
  }

  createCompetition(competition: Competition): Observable<Competition>{
    console.log('create: ', competition)
    if (typeof competition.date === 'string') {
      competition.code = competition.location.slice(0,3).concat('-',competition.date.slice(2,4),'-',competition.date.slice(5,7),'-',competition.date.slice(8,10))
    }
    
    return this.http.post<Competition>(this.competitionUrl, competition).pipe(
      catchError( error =>{
        console.log(error)
        return throwError(() => error);
      })
    );;
  }
}
