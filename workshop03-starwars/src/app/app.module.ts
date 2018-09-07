import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';


@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule,
    HttpClientModule
  ],
  providers: [StarWarsService,StarWarsDatabaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
