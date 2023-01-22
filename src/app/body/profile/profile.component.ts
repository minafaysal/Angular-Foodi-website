import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedBtn:number= 1; 
  prev_orders:any=[];
  constructor() {
   }

   addItem(orders: any) {
    this.prev_orders=orders;
    console.log(this.prev_orders);
    
  }

  ngOnInit(): void {
    console.log("hhhhhhhhhhherrree")
    
  

  }
  onSelectBtn(num:any){
    this.selectedBtn=num;
  }

 

}
