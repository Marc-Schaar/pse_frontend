import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PseElement } from '../modules/pse-element';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);

  private readonly baseApiUrl: string =
    'http://localhost:3000/api/pse-elements';

  public loadAllfromDb(): Observable<PseElement[]> {
    return this.http.get<PseElement[]>(this.baseApiUrl);
  }

  public loadOnefromDb(id: number): Observable<PseElement> {
    return this.http.get<PseElement>(`${this.baseApiUrl}/${id}`);
  }

  public setUrlQuerryParamId(id: number) {
    return this.router.navigate([], {
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
  }

  public removeQueryParam() {
    return this.router.navigate([], {
      queryParams: { id: null },
      queryParamsHandling: 'merge',
    });
  }
}
