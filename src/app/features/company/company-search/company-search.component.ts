import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss'],
})
export class CompanySearchComponent {
  @Output() companyEvent = new EventEmitter<string>();

  form: FormGroup;
  showCompanyList = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      company: [''],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.companyEvent.emit(this.form.value.company);
    }
  }
}
