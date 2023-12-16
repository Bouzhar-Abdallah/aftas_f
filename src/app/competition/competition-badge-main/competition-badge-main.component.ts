import { Component, Input } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';

@Component({
  selector: 'app-competition-badge-main',
  templateUrl: './competition-badge-main.component.html',
  styleUrls: ['./competition-badge-main.component.css'],
})
export class CompetitionBadgeMainComponent {
  @Input() competition!: Competition;
  headerMessage: string = 'header';
  footerMessage: { time: string; provideResultsLink: boolean; timeMessage: string } = {
    time: '',
    timeMessage: 'reste',
    provideResultsLink: false,
  };

  ngOnChanges() {
    switch (this.competition.status) {
      case 'past':
        this.headerMessage = 'evenement cloturé';
        this.footerMessage = {
          time: 'classement disponible',
          provideResultsLink: true,
          timeMessage: '',
        };
        break;
      case 'waitingToStart':
        this.headerMessage = 'Inscription fermé ';

        this.footerMessage = {
          time:
            this.competition.timeRemainingBeforeStart.hours +
            ':' +
            this.competition.timeRemainingBeforeStart.minutes,
          provideResultsLink: false,
          timeMessage: ' le jeu commence dans: '
        };
        break;
      case 'duringPlay':
        this.headerMessage = 'jeu en cours';
        
        this.footerMessage = {
          time:
            this.competition.timeRemainingBeforeEnd.hours +
            ':' +
            this.competition.timeRemainingBeforeEnd.minutes,
          provideResultsLink: true,
          timeMessage: 'le jeu se termine dans: '
        };
        break;
      case 'openSubscription':
        this.headerMessage = 'inscription ouverte';

        this.footerMessage = {
          time:
           this.competition.timeRemainingBeforeStart.days +
            ' jours ' +
            this.competition.timeRemainingBeforeStart.hours +
            ':' +
            this.competition.timeRemainingBeforeStart.minutes,
          provideResultsLink: false,
          timeMessage: ' le jeu commence dans: '
        };
        break;
      default:
        this.headerMessage = 'header';
        break;
    }
  }
}
