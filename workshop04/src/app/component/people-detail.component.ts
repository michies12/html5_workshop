import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people: People;
  canShare = false;

  constructor(private swdbSvc: StarWarsDatabaseService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.canShare=!!navigator['share'];
    const cid = this.activatedRoute.snapshot.params.CharId;
    this.swdbSvc.find(parseInt(cid))
        .then((result) => {
          this.people = result;
          console.log('people: ', result)
        })
        .catch(err => {
          console.error('error: ', err);
        })
  }
  back(){
    this.router.navigate(['/']); 
  } 

  share(){
    navigator['share']({
      title: `Star wars!`,
      text: `Sharing ${this.people.name} with the world!`,
      url: `https:/michies12.github.io/html5_workshop`
    })
  }


}
