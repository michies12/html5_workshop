import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutesModules } from './app-routes.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PeopleListComponent } from './component/people-list.component';
import { AppRoutesComponent } from './component/app-routes.component';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { HttpClientModule} from '@angular/common/http';
import { AddPeopleComponent } from './component/add-people.component';
import { PeopleDetailComponent } from './component/people-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AppRoutesComponent,
    AddPeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MaterialModule,FormsModule
    ,AppRoutesModules,HttpClientModule
  ],
  providers: [StarWarsService,StarWarsDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
