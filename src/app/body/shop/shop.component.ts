import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { item } from 'src/app/models/items';
import { FavouriteService } from 'src/app/services/favourite.service';
import { FirebaseService } from 'src/app/services/firebase.service';
declare var bootstrap: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cartProducts:any[]=[];     /////////////////
  amount:number=1;
  @Output() item =new EventEmitter<any[]>();
  text='';
  comments:string=""; 
   items:item[] = [];
  activeState:number = 0;
  foodItem:any = "";
  constructor(private database:FirebaseService ,private FavouriteService:FavouriteService,) {

    
   }

  /* @ViewChild('myModel') myModel: any; */



/************************************* Sub-Functions **************************************/
  //calculate price after discount
  calaPriceADiscount(price:number,discount:number){
    return price - (price * (discount/100));
  }

  //change active state
  changeAState(newState:number)
  {
    this.activeState = newState;
  }

  /************************************* Sub-Functions **************************************/
  /************************************* Main-Functions **************************************/
  //get all  items from database
  getAllItemsFDatabase()
  {
    this.database.getAllItems().subscribe((data)=>{
      this.items = data;
    },
    (error)=>{
      console.log("from shop/getAllItems"+error);
    });
  }

  //get items depending on category
  getItemDCategory(category:string)
  {
    this.database.getItemsWCondition(category).subscribe((data)=>{
      this.items = data;
    },(error)=>{
      console.log("from shop/getItemDCategory"+error)
    })
 
  }

  //show bootstrap modal
  showBootstrapModal(foodItem:any)
  {
    const element = document.getElementById('exampleModal') as HTMLElement;
    const myModal = new bootstrap.Modal(element);
    this.foodItem = foodItem;
    myModal.show();
   
  }
  
  ngOnInit(): void {
    //get all items from database
    this.getAllItemsFDatabase();
  }

  //////////////////////////////////////////


  addToCart(event:any){
    // console.log(event)
    if ("cart" in sessionStorage){
      this.cartProducts=JSON.parse(sessionStorage.getItem("cart")!)
      let exist= this.cartProducts.find(item=>item.item.itemId ==event.item.itemId)
      if(exist){
        alert("product is already in your cart ")
      }else{

        this.cartProducts.push(event)
        sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }

      }
    else{
      this.cartProducts.push(event)
      sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))

    };


    this.item.emit(this.cartProducts)
    console.log(event) 
  }

  addAmount(index:number){
   
    this.amount =index+1;
    this.cartProducts[index].quantity=this.amount
    sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  
  minsAmount(index:any){
    console.log(index)
   this.amount = index-1;
    this.cartProducts[index].quantity=this.amount
    sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
 
  favorite:item[]=[];
  // add item to favourite
  additemtofavorite(pitem:any)
  {
    this.favorite.push(pitem);
    this.FavouriteService.addfavorite(pitem);
  }

}
