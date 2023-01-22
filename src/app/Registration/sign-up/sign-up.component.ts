import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fbService:FirebaseService) { }
  passwordState:string = "password";
  cPasswordState:string = "password";
  @Output("closeLSModal") closeLSModal: EventEmitter<any> = new EventEmitter();

  /* change password satate (hidden & visiable) */
  changePassState()
  {
    if(this.passwordState == "password")
      this.passwordState = "text";
    else
      this.passwordState = "password";
  }

  /* change confirm password satate (hidden & visiable) */
  changeCPassState()
  {
    if(this.cPasswordState == "password")
      this.cPasswordState = "text";
    else
      this.cPasswordState = "password";
  }

  /* sing up the user */
  onSubmit(form:NgForm)
  {
    this.fbService.signUp(form).then(()=>{
      console.log("userAdded");
      //calling close function in main registration
      this.closeLSModal.emit();
      form.reset();
    })
  }

  ngOnInit(): void {
  }

}
