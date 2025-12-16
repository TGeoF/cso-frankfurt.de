import * as Contentful from "contentful";

export interface KonzertFields {
	projektnummer: Contentful.EntryFields.Integer;
	titel?: Contentful.EntryFields.Symbol;
	datumUhrzeit1: Contentful.EntryFields.Date;
	datumUhrzeit2?: Contentful.EntryFields.Date;
	programm?: Contentful.EntryFields.Symbol[];
	solistinnenUndLeitung: Contentful.EntryFields.Symbol[];
	ort: Contentful.EntryFields.Text;
	eintrittspreise: Contentful.EntryFields.Text;
	flyer?: Contentful.Asset;
}

export interface Konzert {
	contentTypeId: "konzert";
	fields: KonzertFields;
}

export interface ProjektFields {
	projektnummer: Contentful.EntryFields.Integer;
	titel?: Contentful.EntryFields.Symbol;
	termine: Contentful.EntryFields.Text; // markdown or newline-separated list
	programm?: Contentful.EntryFields.Symbol[];
	anmeldungslink: Contentful.EntryFields.Symbol;
	anmeldeschluss?: Contentful.EntryFields.Date;
}

export interface Projekt {
	contentTypeId: "projekt";
	fields: ProjektFields;
}
