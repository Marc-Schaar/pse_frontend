import { Component, OnInit } from '@angular/core';
import { PseElement } from '../../modules/pse-element';

@Component({
  selector: 'app-main-libary',
  imports: [],
  templateUrl: './main-libary.component.html',
  styleUrl: './main-libary.component.scss',
})
export class MainLibaryComponent implements OnInit {
  private databasePseElements: PseElement[] = [];
  private pseElementsTorRender: PseElement[] = [];

  ngOnInit(): void {
    this.databasePseElements.push(
      new PseElement({
        id: 1,
        name: 'Wasserstoff',
        symbol: 'H',
        ordnungszahl: 1,
      }),
      new PseElement({ id: 2, name: 'Helium', symbol: 'He', ordnungszahl: 2 })
    );
    this.pseElementsTorRender = [...this.databasePseElements];
  }

  public getPseElements() {
    return this.pseElementsTorRender;
  }
}
