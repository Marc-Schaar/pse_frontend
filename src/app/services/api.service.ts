import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PseElement } from '../modules/pse-element';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);
  private readonly baseApiUrl: string =
    'http://localhost:3000/api/pse-elements';

  /**
   * Loads all PseElements from the backend API.
   * @returns Observable emitting an array of PseElement objects.
   */
  public loadAllfromDb(): Observable<PseElement[]> {
    return this.http.get<PseElement[]>(this.baseApiUrl);
  }

  /**
   * Loads a PseElement by its ID from the backend API.
   * @param id Element ID to load.
   * @returns Observable emitting the requested PseElement.
   */
  public loadOnefromDb(id: number): Observable<PseElement> {
    return this.http.get<PseElement>(`${this.baseApiUrl}/${id}`);
  }

  /**
   * Sets or updates the 'id' query parameter in the URL without reloading the page.
   * @param id Element ID to set as a query parameter.
   * @returns A promise that resolves when navigation is complete.
   */
  public setUrlQuerryParamId(id: number): Promise<boolean> {
    return this.router.navigate([], {
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Removes the 'id' query parameter from the URL.
   * @returns A promise that resolves when navigation is complete.
   */
  public removeQueryParam(): Promise<boolean> {
    return this.router.navigate([], {
      queryParams: { id: null },
      queryParamsHandling: 'merge',
    });
  }
}
