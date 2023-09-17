import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-lists',
  templateUrl: './company-lists.component.html',
  styleUrls: ['./company-lists.component.scss'],
})
export class CompanyListsComponent implements AfterViewInit, OnInit {
  @Output() companyNameEvent = new EventEmitter<string>();
  dataSource = new MatTableDataSource<any[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  @Input() companies$: Observable<any[]> | undefined;

  displayedColumns = ['title'];

  ngOnInit(): void {
    this.companies$?.subscribe((m) =>
      console.log('Company filtered (in List Component)-> ' + JSON.stringify(m))
    );
    this.companies$?.subscribe((row) => {
      this.dataSource.data = row;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  companyClick(event: string): void {
    this.companyNameEvent.emit(event);
  }
}
