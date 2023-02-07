import * as Contentful from "contentful";

export interface TypeKonzertFields {
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

export type TypeKonzert = Contentful.Entry<TypeKonzertFields>;