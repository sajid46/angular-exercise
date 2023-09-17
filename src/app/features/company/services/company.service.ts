import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CompaniesModel } from '../models/compnies.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseDataModel: Observable<any[]> = of(CompaniesModel);
  baseData =
    'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any[]> {
    const headers = new HttpHeaders().set(
      'x-api-key',
      '9YGbxwXSBi8oM0ep9ThNgQHUy2HA0db6mn5DUEXd'
    );
    //var result = this.http.get<any[]>(`${this.baseData}{company}`, { headers });
    return this.baseDataModel;
  }
}
