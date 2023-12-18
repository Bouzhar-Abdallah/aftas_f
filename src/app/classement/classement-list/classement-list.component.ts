import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { Ranking } from 'src/app/models/ranking.model';
import { CompetitionService } from 'src/app/service/competition.service';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-classement-list',
  templateUrl: './classement-list.component.html',
  styleUrls: ['./classement-list.component.css']
})
export class ClassementListComponent {
constructor(
  private eventsService: EventsService,
  private competitionService: CompetitionService,
) {}
rankings!: Ranking[];
competition!: Competition;
  ngOnInit() {
  this.eventsService.competitionSelected$.subscribe(
    (competition: Competition) => {
      this.rankings = competition.rankings
      this.competition = competition
      this.competitionService.getCompetition(competition.code).subscribe((actualisedCompetition)=>{
        this.rankings = actualisedCompetition.rankings
        this.rankings.sort((a,b)=>{return a.rank - b.rank})
      })
    }
  );
  this.eventsService.eventEmitted$.subscribe((event: string) => {
    if(event === '_huntAdded'){
      console.log('event recieved')
      this.competitionService.getCompetition(this.competition.code).subscribe((actualisedCompetition)=>{
        console.log('ecent done', actualisedCompetition.rankings)
        this.rankings = actualisedCompetition.rankings
        this.rankings.sort((a,b)=>{return a.rank - b.rank})
      })
    }
  })
}
}
