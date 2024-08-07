import { Component } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {
  invoice!: Invoice

  constructor(private service: InvoiceService) {
    
  }
  ngOnInit(): void{
    this.invoice = this.service.getInvoice();
  }

}
