import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor() { }

  // products=[
  //   {"id":1 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-1.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":2 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-2.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":3 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-3.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":4 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-4.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },

  // ]
  products:any=[
  ]
  getAllProduct(){
    return this.products;
  }
  addfavorite(pitem:any){
    this.products.push(pitem);
    console.log(this.products);
  }
}
