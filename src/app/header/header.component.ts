import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartProducts:any[]=[];
  subTotal: number = 0;
  item: any;
  constructor(private fbService:FirebaseService) {
   }
   loginSignUpState:number = 0;
   @Output() myEvent = new EventEmitter();
   userToken:any;

   /* open login & signUp modal */
   openModal(lsState:number)
   {
    this.loginSignUpState = lsState;
    this.myEvent.emit(null);
   }

   /* logOut */
   logOut()
   {
    this.fbService.signOut();
   }

  ngOnInit(): void {
    var brand=document.querySelector(".brand");
    var nav =document.querySelector("nav");
    var nav_btn=document.getElementById("nav-btn");
    var navLink=document.querySelectorAll(".nav-link");
    window.addEventListener("scroll",function(){
      if(this.window.pageYOffset>100){
        brand?.classList.remove("text-white");
        brand?.classList.add("text-dark");
        nav?.classList.add("bg-light")
        nav?.classList.add("activeNav");
        nav?.classList.remove("topNav");
        nav_btn?.classList.add("text-dark");
        navLink.forEach((e)=>{
        e.classList.remove("text-white");
        e.classList.add("text-dark");
       });
      }else{
        brand?.classList.remove("text-dark");
        brand?.classList.add("text-white");
        nav?.classList.remove("bg-light")
        nav?.classList.add("topNav")
        nav?.classList.add("activeNav");
        nav_btn?.classList.remove("text-dark");
        navLink.forEach((e)=>{
          e.classList.remove("text-dark");
          e.classList.add("text-white");
         });
      }
    });

    /* changes depending on user state (login & logOut) */
    this.fbService.userToken$.subscribe((data)=>{
      this.userToken = data;
    })


    this. getCartProduct()
  }


  ////////////////////////////mina//////////////////
  getCartProduct(){
    if ("cart" in sessionStorage){
      this.cartProducts=JSON.parse(sessionStorage.getItem("cart")!)
    }
    console.log(this.cartProducts)
    
    //  this.getCartTotal();
  }

  addAmount(index:number){
    this.cartProducts[index].quantity++;
    //  this.getCartTotal();
    sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  
  minsAmount(index:number){
    this.cartProducts[index].quantity--;
    //  this.getCartTotal();
    sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  
  detectChange(){
      //  this.getCartTotal();
    sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1)
    console.log(this.cartProducts)
    this.getCartTotal();
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts))
    
  }
  
  getCartTotal() {
    this.subTotal = 0
    for (let product in this.cartProducts) {
      this.subTotal += this.cartProducts[product].item.iPrice * this.cartProducts[product].quantity
      
    }
  }
  
}

