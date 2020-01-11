import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullNameInfoComponent } from './components/full-name-info/full-name-info.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { ExperienceInfoComponent } from './components/experience-info/experience-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FullNameInfoComponent,
    EducationInfoComponent,
    ExperienceInfoComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
