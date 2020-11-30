import { Component, OnInit } from '@angular/core';
import { FormServiceService } from "../form-service.service";
import { quali,skill,employment, BasicForm, paddress } from '../formclass';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  basicinfo: BasicForm []=[];
  addressDetails: paddress []=[];
  qualificationDetails: quali [] = [];
  employmentDetails: employment[]=[];
  skillDetails: skill [] = [];
  constructor(private data:FormServiceService , private _router: Router) { }

  ngOnInit(): void {
    this.data.getBasicForm().subscribe((data)=>
            {
              this.basicinfo=data;
            });

            this.data.getPaddress().subscribe((data)=>
            {
              this.addressDetails=data;
            });

            this.data.getQualification().subscribe((data)=>
            {
              this.qualificationDetails=data;
            });

            this.data.getEmployment().subscribe((data)=>
            {
              this.employmentDetails=data;
            });

            this.data.getSkill().subscribe((data)=>
            {
              this.skillDetails=data;
            });

  }

  deleteBasicForm(item:BasicForm)
  {
    this.data.deleteBasicForm(item.id).subscribe((x:any)=>
      {
        this.basicinfo.splice(this.basicinfo.indexOf(item), 1);
      }
    );
  }

  onEditForm(item:BasicForm,items:paddress,itemss:quali,itemsss:skill,itemssss:employment)
  {
    this._router.navigate(['/editdata', item.id]);
    this._router.navigate(['/editdata', items.id]);
    this._router.navigate(['/editdata', itemss.id]);
    this._router.navigate(['/editdata', itemsss.id]);
    this._router.navigate(['/editdata', itemssss.id]);

    //this.data.getBasicFormById(item.id).subscribe((x:BasicForm[]) => {
    ///console.log("success",x);
 // });
 // this.data.getPaddressById(items.id).subscribe((x:paddress[]) => {
   // console.log("Fail",x);
//});



}



}
