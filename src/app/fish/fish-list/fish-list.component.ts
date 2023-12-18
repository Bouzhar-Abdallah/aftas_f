import { Component } from '@angular/core';
import { Fish } from 'src/app/models/fish.model';
import { EventsService } from 'src/app/service/events.service';
import { FishService } from 'src/app/service/fish.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent {
  constructor(private fishService: FishService, private eventsService: EventsService) {}
fishs!: Fish[];
  ngOnInit(){
    this.fishService.getFishs().subscribe((fish) => {
      this.fishs = fish;
    });
  }

  selectFish(fish: Fish) {
   this.eventsService.emitFishSelected(fish);
  }
}
