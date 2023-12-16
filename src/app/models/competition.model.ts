import { Time } from '@angular/common';

export class Competition {
  code: string;
  location: string;
  date: Date|string;
  startTime: Date|string;
  endTime: Date|string;
  numberOfParticipants: number;
  amount: number;
  timeRemainingBeforeStart: {days: number, hours: number, minutes: number, seconds: number};
  timeRemainingBeforeEnd: {days: number, hours: number, minutes: number, seconds: number};
  status: CompetitionStatus;
  displayDate: string;
  rankings: any[];
  inscriptionOpen: boolean;
  huntOpen: boolean;
  isToday: boolean;

  constructor(
    code: string,
    date: Date,
    displayDate: string,
    startTime: Date,
    endTime: Date,
    numberOfParticipants: number,
    location: string,
    amount: number,
    status: CompetitionStatus,
    timeRemainingBeforeStart: {days: number, hours: number, minutes: number, seconds: number},
    timeRemainingBeforeEnd: {days: number, hours: number, minutes: number, seconds: number},
    rankings: any[],
    inscriptionOpen: boolean,
    huntOpen: boolean,
    isToday: boolean,
  ) {
    this.code = code;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.numberOfParticipants = numberOfParticipants;
    this.location = location;
    this.amount = amount;
    this.timeRemainingBeforeStart = timeRemainingBeforeStart;
    this.timeRemainingBeforeEnd = timeRemainingBeforeEnd;
    this.status = status;
    this.displayDate = displayDate;
    this.rankings = rankings;
    this.inscriptionOpen = inscriptionOpen;
    this.huntOpen = huntOpen;
    this.isToday = isToday;
  }
}


export enum CompetitionStatus {
  "past" = "past",
  'waitingToStart' = 'waitingToStart',
  'duringPlay' = 'duringPlay',
  'openSubscription' = 'openSubscription',
}
