import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cartProducts:any[]=[];
subTotal:any=0
visable:boolean=true;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCartProduct()

    console.log(this.firstName)
   
  }
getCartProduct(){
  if ("cart" in sessionStorage){
    this.cartProducts=JSON.parse(sessionStorage.getItem("cart")!)
  }
  console.log(this.cartProducts)
  
   this.getCartTotal();
}

getCartTotal(){
  this.subTotal=0
  for (let x in this.cartProducts){
    this.subTotal +=this.cartProducts[x].item.iPrice * this.cartProducts[x].quantity
    
  }
}
 
  hide(location: any,details:any,payment:any ,progressBar1:any,progressBar2:any) {
   if(!details.classList.contains('d-none')){
    payment.classList.remove('d-none');
    details.classList.add('d-none');
    location.classList.add('d-none');
    progressBar2.classList.add('w-100');
    
   this.visable=false

   }else{
     details.classList.remove('d-none');
     location.classList.remove('d-block');
     location.classList.add('d-none');
     progressBar1.classList.add('w-100');
     progressBar2.classList.add('w-50');
    }
    
  }

  registerationForm=this.fb.group({
    firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,30}")]],
    lastName:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,30}")]],
    phoneNumber:['',[Validators.required,Validators.pattern("[0-9]{11,15}")]],
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@([a-zA-Z5-9]+)\.(com|eg)$")]],
    visaCardNum:['',[Validators.required,Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)]],
    payment:['',],
    orderType:['',],
    orderDate:['',],
    address:['',],
    deliveryInstructions:[''],
  })



  get firstName(){
    return this.registerationForm.get('firstName')
  }
  get lastName(){
    return this.registerationForm.get('lastName')
  }
  get phoneNumber(){
    return this.registerationForm.get('phoneNumber')
  }
  get email(){
    return this.registerationForm.get('email')
  }
  get visaCardNum(){
    return this.registerationForm.get('visaCardNum')
  }
  get payment(){
    return this.registerationForm.get('payment')
  }
  get orderType(){
    return this.registerationForm.get('orderType')
  }
  get orderDate(){
    return this.registerationForm.get('orderType')
  }
  get address(){
    return this.registerationForm.get('address')
  }





  
  submiteCheckoutDetails(){
 this.registerationForm.value
 console.log(this.registerationForm.value)
sessionStorage.setItem("checkoutDetails",JSON.stringify(this.registerationForm.value))
  }

  submiteCheckoutPayment(){

  }
  
}
