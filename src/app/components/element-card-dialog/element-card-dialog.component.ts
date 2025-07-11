import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
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

  element: PseElement = new PseElement(0);

  ngOnInit(): void {
    this.loadQueryParam();
  }

  public loadQueryParam() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.dbService.loadOnefromDb(+id).subscribe((data) => {
          this.element = data;
        });
      }
    });
  }

  public closeDialog() {
    this.dialogOpen.emit(false);
  }
}
