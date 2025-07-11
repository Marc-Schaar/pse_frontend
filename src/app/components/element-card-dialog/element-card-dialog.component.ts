import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { PseElement } from '../../modules/pse-element';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

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

  element: PseElement = new PseElement(1);
  id: string | null = null;

  ngOnInit(): void {
    this.loadQueryParam();
  }

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

  public closeDialog() {
    this.dialogOpen.emit(false);
  }

  public nextElement() {
    if (this.id && +this.id < 118)
      this.dbService.setUrlQuerryParamId(+this.id + 1);
  }

  public prevElement() {
    if (this.id && +this.id > 1)
      this.dbService.setUrlQuerryParamId(+this.id - 1);
  }
}
