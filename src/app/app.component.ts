import { Component } from '@angular/core';
import { COMPETITIONS, Competition } from './models/competition.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aftas_f';

  competitions: Competition[] = COMPETITIONS;

}
