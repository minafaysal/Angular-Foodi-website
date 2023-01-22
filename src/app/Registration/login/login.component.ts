import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fbService:FirebaseService) { }
  passwordState:string = "password";
  @Output("closeLSModal") closeLSModal: EventEmitter<any> = new EventEmitter();
  errorMessage:string="";


  /* change password satate (hidden & visiable) */
  changePassState()
  {
    if(this.passwordState == "password")
      this.passwordState = "text";
    else
      this.passwordState = "password";
  }

  /* login */
  onSubmit(form:NgForm)
  {
    this.fbService.signIn(form).then(()=>{
      console.log("login done");
      this.closeLSModal.emit();
      this.errorMessage = "";
      form.reset();
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  ngOnInit(): void {
  }

}
