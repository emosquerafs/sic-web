import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType } from '../interfaces/document-type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private apiUrl = `${environment.api_gateway}/document-types`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(this.apiUrl);
  }

  getById(id: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.apiUrl}/${id}`);
  }

  create(documentType: DocumentType): Observable<DocumentType> {
    return this.http.post<DocumentType>(this.apiUrl, documentType);
  }

  update(id: number, documentType: DocumentType): Observable<DocumentType> {
    return this.http.put<DocumentType>(`${this.apiUrl}/${id}`, documentType);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
