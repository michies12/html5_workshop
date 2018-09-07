import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;

  people: People = null;

  constructor(
    private router: Router,
    private swSvc: StarWarsService, 
    private swdbSvc: StarWarsDatabaseService) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/']); 
  }  

  clear(){
    this.form.resetForm();
  }

  save(){
    console.log('people id: ', this.form.value.peopleId);

    this.people = null;

    this.swdbSvc.find(this.form.value.peopleId)
      .then(
        (result) => { //resolve
          console.log('from cache: ', result)
          this.people = result;
          this.router.navigate(['/'],{
            queryParams:{
              message:`Saved ${this.form.value.peopleId}`
            }
          }); 
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
  }
}
