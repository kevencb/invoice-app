import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
  styles: ``
})
export class CompanyViewComponent {
  @Input() id!: number;
  @Input() company!: Company
}
