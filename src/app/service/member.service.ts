import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  private membersUrl = API_URL+'/member';

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.membersUrl);
  }
}
