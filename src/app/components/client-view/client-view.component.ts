import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';
import { Address } from '../../models/address';

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styles: ``
})
export class ClientViewComponent {

  @Input() client!: Client
  @Input() address!: Address
  
}
