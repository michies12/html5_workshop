import { NgModule} from "@angular/core";
import { FlexLayoutModule} from "@angular/flex-layout";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

//import the following material modules 
//to be used in application
const MODULES=[
    FlexLayoutModule,MatToolbarModule,
    MatFormFieldModule,MatInputModule,
    MatButtonModule,MatIconModule,
    MatTabsModule,MatSnackBarModule,
    MatListModule

];


@NgModule({
    imports: MODULES,
    exports: MODULES

})
export class MaterialModule{

}