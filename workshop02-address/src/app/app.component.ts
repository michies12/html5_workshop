import { Component } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements onInit{
  title = 'workshop02-address';
  private tab = [
  {label: "A - E", pattern: /^[a-e].*/i}, 
  {label: "F - J", pattern: /^[f-j].*/i},  
  {label: "K - O", pattern: /^[k-o].*/i},
  {label: "P - T", pattern: /^[p-t].*/i},
  {label: "U - Z", pattern: /^[u-z].*/i},    
  ]

  //svc is injected into the component
  constructor(private addressSvc: AddressService,
    public snackBar: MatSnackBar){}
  ngOnInit(){
    this.addressSvc.findAddress(this.tab[0].pattern)
    .then(addr=>{
      console.log('initial address: ', addr)
    })
    .catch(err=>{
      console.log('error: ', err)
    })
  }
  processAddress(address: Address) {
    console.log("address = ", address);
    this.addressSvc.addNewAddress(address)
    .then(result =>{
      console.log("saved: ", result);
      this.snackBar.open("Data saved", "OK", {
        duration: 2000,
      });
    })
    .catch(err =>{
      console.log("err: ", err);
    })
  }

  loadAddresses(event: MatTabChangeEvent){
    const patt = this.tab[event.index].pattern;
    console.log("event = ", this.tab[event.index].pattern);
  }
}
