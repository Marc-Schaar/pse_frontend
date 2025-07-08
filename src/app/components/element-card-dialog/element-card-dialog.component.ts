import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { PseElement } from '../../modules/pse-element';

@Component({
  selector: 'app-element-card-dialog',
  imports: [],
  templateUrl: './element-card-dialog.component.html',
  styleUrl: './element-card-dialog.component.scss',
})
export class ElementCardDialogComponent {
  @Input() element!: PseElement | null;

  @Output() dialogOpen = new EventEmitter<boolean>();

  public closeDialog() {
    this.dialogOpen.emit(false);
  }
}
