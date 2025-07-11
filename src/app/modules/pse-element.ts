export class PseElement {
  id: number;
  ordnungszahl: number;
  symbol: string;
  name: string;
  atommasse: number;
  aggregatzustand: string;
  kategorie: string;
  siedepunkt_k: number;
  schmelzpunkt_k: number;
  elektronegativitaet: number;
  dichte_g_cm3: number;
  entdeckt: string;
  oxidationszahlen: string;
  gruppe: number;
  periode: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.ordnungszahl = obj?.ordnungszahl || 0;
    this.symbol = obj?.symbol || '';
    this.name = obj?.name || '';
    this.atommasse = obj?.atommasse || 0;
    this.aggregatzustand = obj?.aggregatzustand || '';
    this.kategorie = obj?.kategorie || '';
    this.siedepunkt_k = obj?.siedepunkt_k || 0;
    this.schmelzpunkt_k = obj?.schmelzpunkt_k || 0;
    this.elektronegativitaet = obj?.elektronegativitaet || 0;
    this.dichte_g_cm3 = obj?.dichte_g_cm3 || 0;
    this.entdeckt = obj.entdeckt || '';
    this.oxidationszahlen = obj?.oxidationszahlen || '';
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
      kategorie: this.kategorie,
      siedepunkt: this.siedepunkt_k,
      schmelzpunkt_k: this.schmelzpunkt_k,
      elektronegativitaet: this.elektronegativitaet,
      dichte_g_cm3: this.dichte_g_cm3,
      entdeckt: this.entdeckt,
      oxidationszahlen: this.oxidationszahlen,
      gruppe: this.gruppe,
      periode: this.periode,
    };
  }
}
