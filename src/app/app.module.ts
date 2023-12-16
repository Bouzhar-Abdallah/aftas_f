import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompetitionsListComponent } from './competition/competitions-list/competitions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionFormComponent } from './competition/competition-form/competition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CompetitionMainComponent } from './competition/competition-main/competition-main.component';
import { LOCALE_ID } from '@angular/core';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { CompetitionBadgeMainComponent } from './competition/competition-badge-main/competition-badge-main.component';
import { CompetitionBadgeParticipantComponent } from './competition/competition-badge-participant/competition-badge-participant.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { ErrorMainComponent } from './error/error-main/error-main.component';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListComponent,
    CompetitionFormComponent,
    CompetitionMainComponent,
    CompetitionBadgeMainComponent,
    CompetitionBadgeParticipantComponent,
    MemberListComponent,
    ErrorMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [provideAnimations(),{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
