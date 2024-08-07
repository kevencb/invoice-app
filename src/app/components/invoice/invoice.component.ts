import { Component } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { ClientViewComponent } from '../client-view/client-view.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, CompanyViewComponent, ListItemsComponent, ClientViewComponent],
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
