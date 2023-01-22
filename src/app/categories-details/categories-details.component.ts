
import { Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { item } from 'src/app/models/items';
import { FirebaseService } from 'src/app/services/firebase.service';
declare var bootstrap: any;


@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnDestroy {
  cartProducts: any[] = [];     /////////////////mina faysal/////////////
  amount: number = 1;
  SubScribe: Subscription = new Subscription;
  constructor(private database: FirebaseService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((Params: ParamMap) => {
            this.caregoryID = Params.get("id")
          })
          
  }

  /* @ViewChild('myModel') myModel: any; */
  items: item[] = [];
  foodItem: any = "";
  finalArray: any[] = [];
  filteredProduct: any[] = [];

  /************************************* Sub-Functions **************************************/
  //calculate price after discount
  calaPriceADiscount(price: number, discount: number) {
    return price - (price * (discount / 100));
  }

  /************************************* Sub-Functions **************************************/
  /************************************* Main-Functions **************************************/
  //get all  items from database
  getAllItemsFDatabase() {
   this.SubScribe = this.database.getAllItems().subscribe((data) => {
          this.items = data;
          if (this.caregoryID == 0) {

            this.filteredProduct = this.items.filter(item => item.category == "pizza")
      
          } else if (this.caregoryID == 1) {
            this.filteredProduct = this.items.filter(item => item.category== "Burger")
            
          } else if (this.caregoryID == 2) {
            this.filteredProduct = this.items.filter(item => item.category== "drinks")
       
          } else if (this.caregoryID == 3) {
            this.filteredProduct = this.items.filter(item => item.category == "sandwich")
          }
          console.log(this.items)

        },
          (error) => {
            console.log("from shop/getAllItems" + error);
          })

  }


  filter(queryString: string) {
    if (queryString) {
      console.log(queryString)
      this.filteredProduct = this.items.filter(
        p => p.iName.toLowerCase().includes(queryString.toLocaleLowerCase( ))
        )
        console.log(this.filteredProduct) 
        
        
        } else  {

          
  this.getItemDCategory()
          this.filteredProduct= this.items
         

        
        
      }
    }





    ngOnDestroy(): void {
      this.SubScribe.unsubscribe();
    }

  showBootstrapModal(foodItem: any) {
    const element = document.getElementById('exampleModal') as HTMLElement;
    const myModal = new bootstrap.Modal(element);
    this.foodItem = foodItem;
    myModal.show();
  }
  caregoryID: any

  ngOnInit(): void {
    //get all items from database
    this.getAllItemsFDatabase();
    //  this. getItemDCategory(category:string) 
    // this.activatedRoute.paramMap.subscribe((Params: ParamMap) => {
    //   this.caregoryID = Params.get("id")
    // })
   
    console.log(this.caregoryID)
    this.getItemDCategory()
   


   console.log(this.items )
    console.log(this.filteredProduct )
    
  }

  getItemDCategory() {
 
    console.log(this.caregoryID)
    if (this.caregoryID == 0) {
      this.items= this.items.filter(item => item.category == "pizza")

    } else if (this.caregoryID == 1) {
      this.items= this.items.filter(item => item.category== "Burger")
      
    } else if (this.caregoryID == 2) {
      this.items= this.items.filter(item => item.category== "drinks")
 
    } else if (this.caregoryID == 3) {
      this.items= this.items.filter(item => item.category == "sandwich")
    }
    console.log(this.items)
  }


  addToCart(event: any) {

    if ("cart" in sessionStorage) {
      this.cartProducts = JSON.parse(sessionStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.itemId == event.item.itemId)
      if (exist) {
        alert("product is already in your cart ")
      } else {
        this.cartProducts.push(event)
        sessionStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    }
    else {
      this.cartProducts.push(event)
      sessionStorage.setItem("cart", JSON.stringify(this.cartProducts))
    };
  }
  addAmount(index: number) {
    this.amount = index + 1;
    this.cartProducts[index].quantity = this.amount
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  minsAmount(index: any) {
    console.log(index)
    this.amount = index - 1;
    this.cartProducts[index].quantity = this.amount
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

 
  


 
}
