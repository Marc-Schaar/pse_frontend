import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PseElement } from '../../modules/pse-element';

@Component({
  selector: 'app-element-card',
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss',
})
export class ElementCardComponent {
  @Input() element!: PseElement;

  @Output() elementDetail = new EventEmitter<PseElement>();

  public openDialog(element: PseElement) {
    this.elementDetail.emit(element);
  }
}
