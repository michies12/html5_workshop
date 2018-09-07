import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleListComponent } from "./component/people-list.component";
import { AddPeopleComponent } from "./component/add-people.component";
import { PeopleDetailComponent } from "./component/people-detail.component";


const ROUTES: Routes = [
    {path:'', component: PeopleListComponent},
    {path:'people', component: PeopleListComponent},
    {path:'add', component: AddPeopleComponent },
    {path:'detail/:CharId', component: PeopleDetailComponent },
    {path:'**', redirectTo:'/',pathMatch:'full'}
    //component: PeopleListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(ROUTES)],
     exports:[RouterModule]

})

export class AppRoutesModules{

} 