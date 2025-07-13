import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  @Output() dialogOpen = new EventEmitter<boolean>();

  private element: PseElement = new PseElement(1);
  private id: string | null = null;

  /**
   * Loads the query parameter and retrieves the corresponding element data.
   */
  ngOnInit(): void {
    this.loadQueryParam();
  }

  /**
   * Subscribes to the route's query parameters and loads the element from the database
   * if an 'id' parameter is set.
   */
  public loadQueryParam() {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.dbService.loadOnefromDb(+this.id).subscribe((data) => {
          this.element = data;
        });
      }
    });
  }

  /**
   * Returns the currently loaded chemical element.
   *
   * @returns The selected PseElement object.
   */
  getElement(): PseElement {
    return this.element;
  }

  /**
   * Emits an event to close the element detail dialog.
   */
  public closeDialog() {
    this.dialogOpen.emit(false);
  }

  /**
   * Increments the current element ID and updates the query parameter to navigate
   * to the next element, if the ID is below or equal to 118.
   */
  public nextElement() {
    if (this.id && +this.id <= 118)
      this.dbService.setUrlQuerryParamId(+this.id + 1);
  }

  /**
   * Decrements the current element ID and updates the query parameter to navigate
   * to the previous element, if the ID is greater than 1.
   */
  public prevElement() {
    if (this.id && +this.id > 1)
      this.dbService.setUrlQuerryParamId(+this.id - 1);
  }
}
