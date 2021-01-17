import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Donor } from 'src/app/Models/donor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:Donor[];
  searchDonor:FormGroup;
  constructor(private searcher:SearchService) { }

  ngOnInit(): void {
    this.searchDonor = new FormGroup({
      bloodGroup:	new FormControl('',[<any>Validators.required]),
      city:	new FormControl('',[<any>Validators.required])
    });
  }
  search(obj:any){
    this.searcher.getDonor(obj.bloodGroup,obj.city).subscribe(data=>{
      this.result=data;
      console.log(this.result);//redirect to other page after result, resut has the data of donors
    });
  }
  
}
