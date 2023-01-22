import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-main-registration',
  templateUrl: './main-registration.component.html',
  styleUrls: ['./main-registration.component.css']
})
export class MainRegistrationComponent implements OnInit {

  constructor(private router: Router) { }
  clickedState:number = 0;
  element!:HTMLElement; 
  myModal!:any;

  /* change clicked state to change style  */
  changeWhoClicked(cState:number){
    this.clickedState = cState;
  }

  /* open login & signUp modal */
  openLSModal(lsState:number)
  {
    this.clickedState = lsState;
    this.myModal.show();
  }

  /* close login & signUp modal */
  closeLSModal()
  {
    this.myModal.hide()
  }


  ngOnInit(): void {
    /*login & signUp modal reference*/
    this.element = document.getElementById('loginSignUpModal') as HTMLElement;
    this.myModal = new bootstrap.Modal(this.element); 
  }

}
