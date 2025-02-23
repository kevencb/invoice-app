import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styles: ``
})
export class ListItemsComponent {

  @Input() items: Item[] = []

  @Output() removeItemEventEmitter: EventEmitter<number> = new EventEmitter

  onRemoveItem(id: number){
    this.removeItemEventEmitter.emit(id)
  }

}
