import { Invoice } from '../models/invoice';
import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal()
    return {... this.invoice, total: total};
  }

  calculateTotal(){
/*   let total = 0
    this.invoice.items.forEach(item => total += item.total())
    return total  */

    return this.invoice.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }
}
