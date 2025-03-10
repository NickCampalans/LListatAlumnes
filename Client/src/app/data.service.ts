import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumne } from './alumne';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getAlumnes(): Observable<Alumne[]> {
    return this.http.get<Alumne[]>('http://localhost:3000/api/alumnes')
  }
}
