export class PseElement {
  id: number;
  ordnungszahl: number;
  symbol: string;
  name: string;
  atommasse: number;
  aggregatzustand: string;
  periodekategorie: string;
  siedepunkt: number;
  schmelzpunkt: number;
  elektronegativität: number;
  dichte: number;
  entdeckt: string;
  oxidationszahlen: number[];
  gruppe: number;
  periode: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.ordnungszahl = obj?.ordnungszahl || 0;
    this.symbol = obj?.symbol || '';
    this.name = obj?.name || '';
    this.atommasse = obj?.atommasse || 0;
    this.aggregatzustand = obj?.aggregatzustand || '';
    this.periodekategorie = obj?.periodekategorie || '';
    this.siedepunkt = obj?.siedepunkt || 0;
    this.schmelzpunkt = obj?.schmelzpunkt || 0;
    this.elektronegativität = obj?.elektronegativität || 0;
    this.dichte = obj?.dichte || 0;
    this.entdeckt = obj.entdeckt || '';
    this.oxidationszahlen = obj?.oxidationszahlen || [0];
    this.gruppe = obj?.gruppe || 0;
    this.periode = obj?.periode || 0;
  }

  toJSON() {
    return {
      id: this.id,
      ordnungszahl: this.ordnungszahl,
      symbol: this.symbol,
      name: this.name,
      atommasse: this.atommasse,
      aggregatzustand: this.aggregatzustand,
      periodekategorie: this.periodekategorie,
      siedepunkt: this.siedepunkt,
      schmelzpunkt: this.schmelzpunkt,
      elektronegativität: this.elektronegativität,
      dichte: this.dichte,
      entdeckt: this.entdeckt,
      oxidationszahlen: this.oxidationszahlen,
      gruppe: this.gruppe,
      periode: this.periode,
    };
  }
}
