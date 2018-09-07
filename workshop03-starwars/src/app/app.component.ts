import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';

import { People } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form')
  form: NgForm;

  people: People = null;

  constructor(private swSvc: StarWarsService, 
    private swdbSvc: StarWarsDatabaseService) { }

  search() {
    console.log('people id: ', this.form.value.peopleId);

    this.people = null;

    this.swdbSvc.find(this.form.value.peopleId)
      .then(
        (result) => { //resolve
          console.log('from cache: ', result)
          this.people = result;
          throw false
        },
        (id) => {
          console.log('not in database: ', id)
          return (id)
        }
        //this.swSvc.searchPeople.bind(this.swSvc) //reject
      )
      .then(this.swSvc.searchPeople.bind(this.swSvc)) //reject
      .then((result:People) => {
        console.log('this.people: ', this.people)
        this.people = this.people || result;
        return (result);
      })
      .then(this.swdbSvc.save.bind(this.swdbSvc)) 
      .catch(err => {
        if (err)
          console.error('err: ', err);
      })

    /*
    this.swSvc.searchPeople(this.form.value.peopleId)
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      /*
      .then(result => {
        console.log('result: ', result);
        this.swdbSvc.save(result);
      })
      .catch(err => {
        console.error('err: ', err);
      })
      */

    this.form.resetForm();
  }
}