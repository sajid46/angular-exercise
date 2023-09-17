import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { CompanyService } from './company/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit, OnDestroy {
  companies$: Observable<any[]> | undefined;
  hideCompaniesFiltered = true;
  IsCompanyNameSelected = false;
  companyName = '';

  protected unsubscribe$ = new Subject<void>();
  companyNameSelected = '';

  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    this._getCompanies('');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  receiveSearchCompanyName($event: string) {
    this.companyName = $event;
    this._getCompanies(this.companyName);
  }

  receiveSelectedCompanyNameName($event: string) {
    this.companyNameSelected = $event;
    console.log(this.companyNameSelected);
    this.IsCompanyNameSelected = true;
  }

  _getCompanies(companyName: string): void {
    console.log('Company Name Selected-> ' + companyName);
    this.companies$ = this.service.getCompanies();

    if (companyName.trim() !== '') {
      this.companies$ = this.companies$.pipe(
        takeUntil(this.unsubscribe$),
        map((company) => company.filter((k) => k['title'] == companyName))
      );

      this.hideCompaniesFiltered = false;
    }

    this.companies$.subscribe((x) => console.log('Filtered Company -> ' + x));

    console.log('hideCompaniesFiltered -> ' + this.hideCompaniesFiltered);
  }
}
