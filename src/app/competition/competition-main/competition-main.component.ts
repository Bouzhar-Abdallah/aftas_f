import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/service/competition.service';
import { EventsService } from 'src/app/service/events.service';
import { Location } from '@angular/common';
import { Member } from 'src/app/models/member.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Ranking } from 'src/app/models/ranking.model';
import { Fish } from 'src/app/models/fish.model';
import { HuntService } from 'src/app/service/hunt.service';
import { Hunt_Req } from 'src/app/models/hunt.model';
@Component({
  selector: 'app-competition-main',
  templateUrl: './competition-main.component.html',
  styleUrls: ['./competition-main.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          top: '0px',
          /* position: 'absolute' */
        })
      ),
      state(
        'closed',
        style({
          /* position: 'relative' */
          top: '250px',
        })
      ),
      transition('open => closed', [animate('0.3s 0.0s ease-in')]),
      transition('closed => open', [animate('0.3s 0.0s ease-out')]),
    ]),
  ],
})

export class CompetitionMainComponent {
  constructor(
    private eventsService: EventsService,
    private competitionService: CompetitionService,
    private huntService: HuntService,
  ) {}
  isOpen = false;
  selectedCompetition$ = this.eventsService.competitionSelected$;
  competition!: Competition;
  selectedMember!: Member;
  selectedFish!: Fish;
    quantity: number = 1;
  emmitOpenMembersListEvent() {
    this.eventsService.emitEvent('_openMemberList');
  }
  emmitStartResultsEntryEvent() {
    this.eventsService.emitEvent('_openGameList');
    this.isOpen = true;
  }
  
  ngOnInit(): void {
    this.eventsService.competitionSelected$.subscribe(
      (competition: Competition) => {
        this.competition = competition
        this.competitionService.getCompetition(competition.code).subscribe((actualisedCompetition)=>{
          this.competition = actualisedCompetition
        })
        //this._location.go('competitions/'.concat(competition.code));
      }
    );

    this.eventsService.eventEmitted$.subscribe((event) => {
      if (event === '_openMemberList') {
        this.isOpen = true;
      }
      if (event === '_closeMemberList' || event === '_closeGameList') {
        this.isOpen = false;
      }
      
    });
    
    this.eventsService.participantAdded$.subscribe((participant: Ranking)=>{
      this.competition.rankings.push(participant)
    })

    this.eventsService.fishSelected$.subscribe((fish: Fish) => {
      if (this.selectedFish && fish.name === this.selectedFish.name) {
        this.quantity++;
      }else{
        this.quantity = 1;
      }
        this.selectedFish = fish;
    })
    this.eventsService.memberSelected$.subscribe((member: Member) => {
      this.selectedMember = member;
    })
  }
  addHunt(){
    console.log('main comp')
    this.huntService.addHunt(
      new Hunt_Req(this.quantity,this.competition.code,this.selectedMember.num,this.selectedFish.name)
    )
  }
}
