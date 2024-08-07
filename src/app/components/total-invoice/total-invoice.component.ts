import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-invoice',
  standalone: true,
  imports: [],
  templateUrl: './total-invoice.component.html',
  styles: ``
})
export class TotalInvoiceComponent {
  @Input() total: number = 0
}
