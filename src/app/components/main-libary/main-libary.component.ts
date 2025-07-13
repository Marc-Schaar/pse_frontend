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

  /**
   * Loads all PseElements from the database and renders them.
   */
  ngOnInit() {
    this.dbService.loadAllfromDb().subscribe((data) => {
      this.databasePseElements = data;
      this.renderDbElements();
    });
  }

  /**
   * Resets the render array by copying all database elements.
   * Used to reset the view or initialize the default list.
   */
  private renderDbElements() {
    return (this.pseElementsTorRender = [...this.databasePseElements]);
  }

  /**
   * Returns the list of currently rendered PseElements.
   *
   * @returns An array of `PseElements` currently being rendered.
   */

  public getPseElements() {
    return this.pseElementsTorRender;
  }

  /**
   * Determines whether the search input is a number or a name,
   * then performs the appropriate search.
   * If the search input is empty, all elements are rendered again.
   */
  public searchElementInit() {
    if (!this.searchValue.trim()) this.renderDbElements();
    let isNum = Number(this.searchValue);
    let result = isNum ? this.searchByOrdnungszahl() : this.searchByName();
    this.pseElementsTorRender = [...result];
  }

  /**
   * Filters elements by atomic number.
   *
   * @returns A filtered array of `PseElements` where the atomic number matches the search input.
   */
  private searchByOrdnungszahl(): PseElement[] {
    return this.databasePseElements.filter(
      (e) => e.ordnungszahl === +this.searchValue
    );
  }

  /**
   * Filters elements by name match.
   *
   * @returns A filtered array of `PseElements` whose names include the search string.
   */
  private searchByName(): PseElement[] {
    return this.databasePseElements.filter((e) =>
      e.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
    );
  }

  /**
   * Opens the detail dialog and sets the element ID in the URL query parameter.
   *
   * @param id - The atomic number (ID) of the clicked element.
   */
  public handleElementClick(id: number) {
    this.dialogOpen = true;
    this.dbService.setUrlQuerryParamId(id);
  }

  /**
   * Returns whether the detail dialog is currently open.
   *
   * @returns A boolean indicating the dialog open state.
   */
  public isDialogOpen(): boolean {
    return this.dialogOpen;
  }

  /**
   * Closes the element detail dialog and removes the query parameter from the URL.
   */
  public closeDialog() {
    this.dialogOpen = false;
    this.dbService.removeQueryParam();
  }

  /**
   * Calculates the grid column position for a given element based on its group.
   *
   * @param element - The `PseElement` object to calculate the column for.
   * @returns The column number (group).
   */
  getGridColumn(element: PseElement): number {
    return element.gruppe;
  }

  /**
   * Calculates the grid row position for a given element based on its period.
   *
   * @param element - The `PseElement` object to calculate the row for.
   * @returns The row number (period).
   */
  getGridRow(element: PseElement): number {
    return element.periode;
  }
}
