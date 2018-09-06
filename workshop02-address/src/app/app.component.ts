import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  private tab = [
  {label: "A - E", pattern: /^[a-e].*/i}, 
  {label: "F - J", pattern: /^[f-j].*/i},  
  {label: "K - O", pattern: /^[k-o].*/i},
  {label: "P - T", pattern: /^[p-t].*/i},
  {label: "U - Z", pattern: /^[u-z].*/i},    
  ]
  currentAddresses: Address[] = [];
  currentTab = 0; 
  //svc is injected into the component
  constructor(private addressSvc: AddressService,
    public snackBar: MatSnackBar){}

    ngOnInit(){
    this.addressSvc.findAddress(this.tab[0].pattern)
    .then(addr=>{
      this.currentAddresses = addr;
      console.log('initial address: ', addr)
    })
    .catch(err=>{
      console.log('error: ', err)
    })
  }

  ngOnDestroy() { }

  processAddress(address: Address) {
    console.log("address = ", address);
    this.addressSvc.addNewAddress(address)
    .then(result =>{
      console.log("saved: ", result);
      //todo ensure ......
      //my code
      const patt = this.tab[this.currentTab].pattern;
      this.addressSvc.findAddress(patt)
        .then((addr: Address[]) => {
          this.currentAddresses = addr;
          console.log('address: ', addr)
        })
        .catch(err => {
          console.error('error: ', err);
        })
         //my code
      this.snackBar.open("Data saved", "OK", {
        duration: 2000,
      });
    })
    .catch(err =>{
      console.log("err: ", err);
    })
  }

    loadAddress(event: MatTabChangeEvent) {
      this.currentTab = event.index;
      const patt = this.tab[event.index].pattern;
      console.log('event: ', patt, typeof(patt))
      this.addressSvc.findAddress(patt)
        .then((addr: Address[]) => {
          this.currentAddresses = addr;
          console.log('address: ', addr)
        })
        .catch(err => {
          console.error('error: ', err);
        })
    }

}