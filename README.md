# Periodensystem der Elemente

Dieses Projekt ist eine Angular-Anwendung zur Darstellung des Periodensystems der Elemente. Die Daten werden über eine REST-API von einem externen Backend geladen.

## Voraussetzungen

- Node.js
- Angular CLI
- Backend mit einer API unter http://localhost:3000/api/pse-elements

## Starten der Anwendung

Stelle sicher, dass das Backend läuft.
Navigiere im Terminal in das Projektverzeichnis des Frontends.
Starte den Entwicklungsserver mit:

```bash
$ ng serve
```

oder, um direkt die Anwendung zu öffnen:

```bash
$ ng serve --open
```

Die Anwendung ist unter http://localhost:4200/ erreichbar.

## Funktionen

- Darstellung aller Elemente im Periodensystem
- Detailanzeige einzelner Elemente in einem Dialog
- Suche nach Namen oder Ordnungszahl
- URL-basiertes Routing (?id=8 z. B. für Sauerstoff)
- Farbige Kategorisierung nach Elementgruppen

## Aufbau

### Komponenten

- MainLibaryComponent: Hauptansicht mit Übersicht und Suchfeld

- ElementCardComponent: Einzelne Darstellung pro Element

- ElementCardDialogComponent: Detailansicht eines Elements im Overlay

### Service

- ApiService: Kommunikation mit dem Backend und Steuerung der URL-Parameter

### Datenmodell

Das Model PseElement enthält unter folgende Eigenschaften:

- Ordnungszahl
- Symbol
- Name
- Atommasse
- Aggregatzustand
- Kategorie (z. B. Edelgas, Nichtmetall)
- Siedepunkt und Schmelzpunkt
- Elektronegativität
- Dichte
- Entdeckungsjahr
- Oxidationszahlen
- Gruppe und Periode im Periodensystem

## API-Endpunkte

Die Anwendung verwendet folgende HTTP-Endpunkte des Backends:

- GET /api/pse-elements: Liste aller Elemente
- GET /api/pse-elements/:id: Einzelnes Element anhand seiner ID
