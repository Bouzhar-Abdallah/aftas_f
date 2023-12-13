export class Member {
  num: number;
  name: string;
  familyName: string;
  accessionDate: Date;
  nationality: string;
  identityDocument: IdentityDocument;
  identityNumber: string;

  constructor(
    num: number,
    name: string,
    familyName: string,
    accessionDate: Date,
    nationality: string,
    identityDocument: IdentityDocument,
    identityNumber: string
  ) {
    this.num = num;
    this.name = name;
    this.familyName = familyName;
    this.accessionDate = accessionDate;
    this.nationality = nationality;
    this.identityDocument = identityDocument;
    this.identityNumber = identityNumber;
  }
}

enum IdentityDocument {
    CIN,
    CARTE_SEJOUR,
    PASSPORT,
}


// generate 10 members with names, family names, accession dates, nationalities, identity documents and identity numbers
export const MEMBERS: Member[] = [
  new Member(1, 'Jean', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(2, 'Pierre', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(3, 'Paul', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(4, 'Jacques', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(5, 'Michel', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(6, 'Jean', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(7, 'Pierre', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(8, 'Paul', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(9, 'Jacques', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789'),
  new Member(10, 'Michel', 'Dupont', new Date('2018-01-01'), 'French', IdentityDocument.CIN, '123456789')
];