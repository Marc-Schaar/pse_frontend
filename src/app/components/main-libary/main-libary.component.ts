import { Component, OnInit } from '@angular/core';
import { PseElement } from '../../modules/pse-element';
import { ElementCardComponent } from '../element-card/element-card.component';

@Component({
  selector: 'app-main-libary',
  imports: [ElementCardComponent],
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
        ordnungszahl: 1,
        symbol: 'H',
        name: 'Wasserstoff',
        atommasse: 1.008,
        aggregatzustand: 'gasförmig',
        periodekategorie: 'Nichtmetall',
        siedepunkt: -252.9,
        schmelzpunkt: -259.1,
        elektronegativitaet: 2.2,
        dichte: 0.00008988,
        entdeckt: '1766',
        oxidationszahlen: [1, -1],
        gruppe: 1,
        periode: 1,
      }),
      new PseElement({
        id: 2,
        ordnungszahl: 2,
        symbol: 'He',
        name: 'Helium',
        atommasse: 4.0026,
        aggregatzustand: 'gasförmig',
        periodekategorie: 'Edelgas',
        siedepunkt: -268.9,
        schmelzpunkt: -272.2,
        elektronegativitaet: 0,
        dichte: 0.0001785,
        entdeckt: '1868',
        oxidationszahlen: [0],
        gruppe: 18,
        periode: 1,
      })
    );
    this.pseElementsTorRender = [...this.databasePseElements];
  }

  public getPseElements() {
    return this.pseElementsTorRender;
  }
}
