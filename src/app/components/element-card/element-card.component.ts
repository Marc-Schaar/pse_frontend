import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { PseElement } from '../../modules/pse-element';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-card',
  imports: [CommonModule],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss',
})
export class ElementCardComponent {
  private readonly dbService: ApiService = inject(ApiService);

  @Input() element!: PseElement;

  @Output() elementDetail = new EventEmitter<number>();

  /**
   * Emits the ID of the clicked element to notify the parent component
   * to open the detail dialog.
   *
   * @param id - The ID of the chemical element.
   */
  public openDialog(id: number) {
    this.elementDetail.emit(id);
  }

  /**
   * Returns a CSS class name based on the element's category.
   *
   * @returns The CSS class name corresponding to the element category.
   */
  public getElementClass(): string {
    switch (this.element.kategorie) {
      case 'Halogen':
        return 'halogen';
      case 'Edelgas':
        return 'edelgas';
      case 'Metall':
        return 'metall';
      case 'Erdalkalimetall':
        return 'erdalkalimetall';
      case 'Alkalimetall':
        return 'alkalimetall';
      case 'Halbmetall':
        return 'halbmetall';
      case 'Nichtmetall':
        return 'nichtmetall';
      case 'Übergangsmetall':
        return 'uebergangsmetall';
      case 'Seltene Erden':
        return 'seltene-erden';
      default:
        return 'default';
    }
  }
}
