import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
import { Router, ActivatedRoute } from "@angular/router";
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: People[] = [];

  constructor(private swSvc: StarWarsService, 
    private swdbSvc: StarWarsDatabaseService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.swdbSvc.getAll()
        .then((ppl: People[]) => {
          this.people = ppl;
          console.log('people: ', ppl)
        })
        .catch(err => {
          console.error('error: ', err);
        })

        if(this.activatedRoute.snapshot.queryParams.message){
          this.snackBar.open(this.activatedRoute.snapshot.queryParams.message, "YAY", {
            duration: 2000,
          });
        }

  }
 add(){
    this.router.navigate(['/add']); 
 }  
}
