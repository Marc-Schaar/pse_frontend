import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';

import { PseElement } from '../../modules/pse-element';
import { ElementCardComponent } from '../element-card/element-card.component';
import { ElementCardDialogComponent } from '../element-card-dialog/element-card-dialog.component';

@Component({
  selector: 'app-main-libary',
  imports: [
    CommonModule,
    FormsModule,
    ElementCardComponent,
    ElementCardDialogComponent,
  ],
  templateUrl: './main-libary.component.html',
  styleUrl: './main-libary.component.scss',
})
export class MainLibaryComponent implements OnInit {
  private readonly dbService: ApiService = inject(ApiService);
  private databasePseElements: PseElement[] = [];
  private pseElementsTorRender: PseElement[] = [];
  private dialogOpen: boolean = false;
  public searchValue: string = '';

  ngOnInit() {
    this.dbService.loadAllfromDb().subscribe((data) => {
      this.databasePseElements = data;
      this.renderDbElements();
    });
  }

  private renderDbElements() {
    return (this.pseElementsTorRender = [...this.databasePseElements]);
  }

  public getPseElements() {
    return this.pseElementsTorRender;
  }

  public searchElementInit() {
    if (!this.searchValue.trim()) this.renderDbElements();
    let isNum = Number(this.searchValue);
    let result = isNum ? this.searchByOrdnungszahl() : this.searchByName();
    this.pseElementsTorRender = [...result];
  }

  private searchByOrdnungszahl(): PseElement[] {
    return this.databasePseElements.filter(
      (e) => e.ordnungszahl === +this.searchValue
    );
  }

  private searchByName(): PseElement[] {
    return this.databasePseElements.filter((e) =>
      e.name.toLocaleLowerCase().includes(this.searchValue)
    );
  }

  public handleElementClick(id: number) {
    this.dialogOpen = true;
    this.dbService.setUrlQuerryParamId(id);
  }

  public isDialogOpen(): boolean {
    return this.dialogOpen;
  }

  public closeDialog() {
    this.dialogOpen = false;
    this.dbService.removeQueryParam();
  }

  getGridColumn(element: PseElement): number {
    return element.gruppe;
  }

  getGridRow(element: PseElement): number {
    return element.periode;
  }
}
