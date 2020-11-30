import { Routes,RouterModule } from "@angular/router";
import { FormTask9Component } from "./form-task9/form-task9.component";

import { ShowdataComponent } from "./form-task9/showdata/showdata.component";
import { EditdataComponent} from "./form-task9/editdata/editdata.component"
const arr : Routes=[

  {path:'', component: FormTask9Component},
  {path:'showdata', component : ShowdataComponent},
  {path:'editdata/:id', component : EditdataComponent},
  {path:'**',redirectTo: 'pagenotfound' },

];
export const arrRouting = RouterModule.forRoot(arr);
