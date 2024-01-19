import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from './model/manager';
import { Visitor } from '../app/model/visitor';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlManager: string = 'https://localhost:7267/api/Managers';
  urlVisitor: string = 'https://localhost:7267/api/Visitors';

  constructor(private http: HttpClient) {}

  //API call methods for managers
  getManagerData(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.urlManager);
  }

  getManagerDataById(id: number): Observable<Manager> {
    return this.http.get<Manager>(`${this.urlManager}/${id}`);
  }

  deleteManagerById(id: number) {
    return this.http.delete(`${this.urlManager}/${id}`);
  }

  addManagerData(data: Manager) {
    return this.http.post<Manager>(this.urlManager, data);
  }

  //API call methods for visitors
  getVisitorData(): Observable<Visitor[]> {
    return this.http.get<Visitor[]>(this.urlVisitor);
  }

  getVisitorDataById(id: number): Observable<Visitor> {
    return this.http.get<Visitor>(`${this.urlVisitor}/${id}`);
  }

  deleteVisitrById(id: number) {
    return this.http.delete(`${this.urlVisitor}/${id}`);
  }

  addVisitorData(data: Visitor) {
    return this.http.post<any>(this.urlVisitor, data);
  }

  //Visitors of specific manager
  visitorsOfManager(id: number) {
    return this.http.get<Visitor[]>(`${this.urlManager}/${id}/Visitors`);
  }
}
