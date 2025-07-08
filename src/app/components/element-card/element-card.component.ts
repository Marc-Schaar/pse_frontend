import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PseElement } from '../../modules/pse-element';

@Component({
  selector: 'app-element-card',
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss',
})
export class ElementCardComponent {
  @Input() element!: PseElement;
}
