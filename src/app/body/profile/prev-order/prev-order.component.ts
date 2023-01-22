import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prev-order',
  templateUrl: './prev-order.component.html',
  styleUrls: ['./prev-order.component.css']
})
export class PrevOrderComponent implements OnInit {
  // prev_orders:any=[];
  prev_orders:any=[
    {img:"../../../../assets/images/food-menu-1.png",title:"Fried Chicken ",subTitle:"lablablablablablablablablablablab",totalPrice:490,count:10,state:"delivered",date:'1/2/2022'},
    {img:"../../../../assets/images/food-menu-2.png",title:"Burger King Whopper",subTitle:"lablablablablablablablablablablab",totalPrice:60,count:2,state:"cancel",date:'1/2/2022'},
    {img:"../../../../assets/images/food-menu-3.png",title:"White Castle Pizzas",subTitle:"lablablablablablablablablablablab",totalPrice:200,count:4,state:"delivered",date:'1/2/2022'},
    {img:"../../../../assets/images/food-menu-4.png",title:"Bell Burrito Supreme",subTitle:"lablablablablablablablablablablab",totalPrice:500,count:4,state:"processing",date:'1/2/2022'}
  ];
  constructor() { }
  @Output() newItemEvent = new EventEmitter<any>();
  addItem(value: any) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
    this.addItem(this.prev_orders);
  }

}
