import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { PseElement } from '../../modules/pse-element';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-element-card',
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss',
})
export class ElementCardComponent {
  private readonly dbService: ApiService = inject(ApiService);

  @Input() element!: PseElement;

  @Output() elementDetail = new EventEmitter<number>();

  public openDialog(id: number) {
    this.elementDetail.emit(id);
  }
}
