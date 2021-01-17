import { Component, OnInit } from '@angular/core';
import { Donor } from 'src/app/Models/donor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/sevices/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;
  heroresp:Donor[];

  constructor(private _api_donor:ApiServiceService) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name:new FormControl('',[<any>Validators.required]),
      username:	new FormControl('',[<any>Validators.email]),
      password:	new FormControl(''[<any>Validators.pattern('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$')]),
      dateOfBirth:	new FormControl('',[<any>Validators.required]),
      bloodGroup:	new FormControl('',[<any>Validators.required]),
      gender:	new FormControl('',[<any>Validators.required]),
      city:	new FormControl('',[<any>Validators.required]),
      contactNumber: new FormControl('',[<any>Validators.pattern('^\d{10}$')]),
      lastDonated:new FormControl('',[<any>Validators.required])
      });

  }


  Save(donor: Donor){
    console.log(donor)
    // @ts-ignore
      if(donor.dateOfBirth.toString()=="")
        delete donor.dateOfBirth
    // @ts-ignore
      if(donor.lastDonated.toString()=="")
        delete donor.lastDonated
    this._api_donor.SaveDonor(donor).subscribe(data=>console.log(data));

  }

  check(){
    this._api_donor.getAllDonor().subscribe(data=>this.heroresp=data);
    console.log(this.heroresp);
  }
}
