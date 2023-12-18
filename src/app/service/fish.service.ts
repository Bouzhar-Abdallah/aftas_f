import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/API_URL';
import { Fish } from '../models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http: HttpClient) { }
  FISH_URL = API_URL + '/fish';
  
  getFishs() {
    return this.http.get<Fish[]>(this.FISH_URL);
  }

}
