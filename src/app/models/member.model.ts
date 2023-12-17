export class Member {
  num!: number;
  name?: string;
  familyName?: string;
  accessionDate?: Date;
  nationality?: string;
  identityDocument?: IdentityDocument;
  identityNumber?: string;

  constructor() /*     num: number,
    name: string,
    familyName: string,
    accessionDate: Date,
    nationality: string,
    identityDocument: IdentityDocument,
    identityNumber: string */
  {
    /*     this.num = num;
    this.name = name;
    this.familyName = familyName;
    this.accessionDate = accessionDate;
    this.nationality = nationality;
    this.identityDocument = identityDocument;
    this.identityNumber = identityNumber; */
  }
}

enum IdentityDocument {
  CIN,
  CARTE_SEJOUR,
  PASSPORT,
}
