import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../services/api.service';

import { PseElement } from '../../modules/pse-element';
import { ElementCardComponent } from '../element-card/element-card.component';
import { ElementCardDialogComponent } from '../element-card-dialog/element-card-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-libary',
  imports: [CommonModule, ElementCardComponent, ElementCardDialogComponent],
  templateUrl: './main-libary.component.html',
  styleUrl: './main-libary.component.scss',
})
export class MainLibaryComponent implements OnInit {
  private readonly dbService: ApiService = inject(ApiService);

  private databasePseElements: PseElement[] = [];
  private pseElementsTorRender: PseElement[] = [];
  private dialogOpen: boolean = false;
  private elementDetail: number | null = null;

  ngOnInit() {
    this.dbService.loadAllfromDb().subscribe((data) => {
      this.databasePseElements = data;
      this.pseElementsTorRender = [...this.databasePseElements];
    });
  }

  public getPseElements() {
    return this.pseElementsTorRender;
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
}
