import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PseElement } from '../modules/pse-element';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/api/pse-elements';

  constructor() {}

  public loadAllfromDb(): Observable<PseElement[]> {
    return this.http.get<PseElement[]>(this.apiUrl);
  }
}
