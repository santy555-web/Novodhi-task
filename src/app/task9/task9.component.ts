import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component implements OnInit {

  customerDetails:FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {


    this.customerDetails = new FormGroup({
      firstName:new FormControl(null, [Validators.required]),
      lastName:new FormControl( null, [Validators.required]),
      phoneNumber:new FormControl(null, [Validators.required]),
      address:new FormControl( null, [Validators.required]),
      street:new FormControl( null, [Validators.required]),
      houseNum:new FormControl( null, [Validators.required]),
      city:new FormControl(null, [Validators.required]),
      floor:new FormControl( null, [Validators.required])
  });
  }

onBasicSubmit()
{
  console.log("data ",this.customerDetails.value);
}

}
