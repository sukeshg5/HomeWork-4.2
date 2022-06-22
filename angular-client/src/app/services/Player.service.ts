import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/Player.model';

const baseUrl = 'http://localhost:9000/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getPlayersMostPasses(): Observable<any> {
    return this.http.get(`${baseUrl}/getPlayersMostPasses`);
  }

  getPlayersMostRushingYards(): Observable<any> {
    return this.http.get(`${baseUrl}/getPlayersMostRushingYards`);
  }
  
  getPlayersLeastRushingYards(): Observable<any> {
    return this.http.get(`${baseUrl}/getPlayersLeastRushingYards`);
  }
  
  getPlayersSortedMostToFewest(): Observable<any> {
    return this.http.get(`${baseUrl}/getPlayersSortedMostToFewest`);
  }
  
  getPlayersMostSacks(): Observable<any> {
    return this.http.get(`${baseUrl}/getPlayersMostSacks`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  
}
