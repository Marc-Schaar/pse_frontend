import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { PseElement } from '../../modules/pse-element';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-element-card-dialog',
  imports: [],
  templateUrl: './element-card-dialog.component.html',
  styleUrl: './element-card-dialog.component.scss',
})
export class ElementCardDialogComponent implements OnInit {
  private readonly dbService: ApiService = inject(ApiService);
  @Output() dialogOpen = new EventEmitter<boolean>();

  element: PseElement = new PseElement(0);

  ngOnInit(): void {
    this.dbService.loadOnefromDb(2).subscribe((data) => {
      this.element = data;
    });
  }

  public closeDialog() {
    this.dialogOpen.emit(false);
  }
}
