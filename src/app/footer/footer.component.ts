import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    var footer=document.querySelector("footer");
  }
     bookingForm=this.fb.group({
        full_name:"",
        email:"",
        persons_count:"",
        date:"",
        message:""
    })
    
  }


