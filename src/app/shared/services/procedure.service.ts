import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedure } from '../interfaces/procedure';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  private apiUrl = `${environment.api_gateway}/procedures`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(this.apiUrl);
  }

  getById(id: number): Observable<Procedure> {
    return this.http.get<Procedure>(`${this.apiUrl}/${id}`);
  }

  create(procedure: Procedure): Observable<Procedure> {
    return this.http.post<Procedure>(this.apiUrl, procedure);
  }

  update(id: number, procedure: Procedure): Observable<Procedure> {
    return this.http.put<Procedure>(`${this.apiUrl}/${id}`, procedure);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
