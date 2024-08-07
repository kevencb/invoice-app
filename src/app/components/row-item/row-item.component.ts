import { Item } from './../../models/item';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styles: ``
})
export class RowItemComponent {
  @Input() item!: Item
  @Output() removeItemEventEmitter: EventEmitter<number> = new EventEmitter

  onRemoveItem(id: number){
    this.removeItemEventEmitter.emit(id)
  }
}
