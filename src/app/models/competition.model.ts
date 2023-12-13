import { Time } from '@angular/common';

export class Competition {
  code: string;
  date: Date;
  starTime: Time;
  endTime: Time;
  numberOfParticipants: number;
  location: string;
  amount: number;

  constructor(
    code: string,
    date: Date,
    starTime: Time,
    endTime: Time,
    numberOfParticipants: number,
    location: string,
    amount: number
  ) {
    this.code = code,
    this.date = date,
    this.starTime = starTime,
    this.endTime = endTime,
    this.numberOfParticipants = numberOfParticipants,
    this.location = location,
    this.amount = amount
  }
}
// generate an array of 10 competitions starting dates from yesterday locations are morrocan cities
export const COMPETITIONS: Competition[] = [
  new Competition('C1', new Date('2020-11-01'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Casablanca', 100),
  new Competition('C2', new Date('2020-11-02'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Rabat', 100),
  new Competition('C3', new Date('2020-11-03'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Tanger', 100),
  new Competition('C4', new Date('2020-11-04'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Fes', 100),
  new Competition('C5', new Date('2020-11-05'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Meknes', 100),
  new Competition('C6', new Date('2020-11-06'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Oujda', 100),
  new Competition('C7', new Date('2020-11-07'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Agadir', 100),
  new Competition('C8', new Date('2020-11-08'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Marrakech', 100),
  new Competition('C9', new Date('2020-11-09'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Tetouan', 100),
  new Competition('C10', new Date('2020-11-10'), {hours: 10, minutes: 30}, {hours: 12, minutes: 30}, 10, 'Kenitra', 100)
];
