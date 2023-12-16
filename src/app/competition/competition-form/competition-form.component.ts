import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CompetitionService } from 'src/app/service/competition.service';
import { EventsService } from 'src/app/service/events.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '120px'
      })),
      state('closed', style({
        top: '-384px'
      })),
      transition('open => closed', [
        animate('0.7s 0.0s ease-in')
      ]),
      transition('closed => open', [
        animate('0.3s 0.0s ease-out')
      ]),
    ]),
  ]
})
export class CompetitionFormComponent {
  constructor(
    private competitionService: CompetitionService,
    private formBuilder: FormBuilder,
    private eventsService: EventsService
  ) {}
  
  competitionFrom!: FormGroup;

  
  
  isOpen = false;



  ngOnInit() {
    
    this.buildForm();

    this.eventsService.eventEmitted$.subscribe((event) => {
      if (event === '_openCompititionForm') {
        this.isOpen = true;
      }
      if (event === '_closeCompititionForm') {
        this.competitionFrom.reset();
      }
    });
  }
  onSubmit() {
    this.competitionService
      .createCompetition(this.competitionFrom.value)
      .subscribe((competition) => {
        this.isOpen = false;
        this.competitionFrom.reset();
        console.log(competition);
      });
  }
  buildForm() {
    this.competitionFrom = this.formBuilder.group({
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      date: ['', [Validators.required, this.dateValidator()]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      numberOfParticipants: [0, Validators.required],
      amount: [0, Validators.required],
    });
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlDate = new Date(control.value);
      const currentDate = new Date();
      controlDate.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);
      const forbidden = controlDate < currentDate;
      return forbidden ? { forbiddenDate: { value: control.value } } : null;
    };
  }
}
