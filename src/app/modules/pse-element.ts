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

  constructor(obj: PseElement) {
    this.id = obj.id;
    this.ordnungszahl = obj.ordnungszahl;
    this.symbol = obj.symbol;
    this.name = obj.name;
    this.atommasse = obj.atommasse;
    this.aggregatzustand = obj.aggregatzustand;
    this.periodekategorie = obj.periodekategorie;
    this.siedepunkt = obj.siedepunkt;
    this.schmelzpunkt = obj.schmelzpunkt;
    this.elektronegativität = obj.elektronegativität;
    this.dichte = obj.dichte;
    this.entdeckt = obj.entdeckt;
    this.oxidationszahlen = obj.oxidationszahlen;
    this.gruppe = obj.gruppe;
    this.periode = obj.periode;
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
