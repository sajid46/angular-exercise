import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyComponent } from '../company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { CompanyListsComponent } from './company-lists/company-lists.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanySearchComponent } from './company-search/company-search.component';

@NgModule({
  declarations: [
    CompanyDetailsComponent,
    CompanyComponent,
    CompanyListsComponent,
    CompanySearchComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
  ],
})
export class CompanyModule {}
