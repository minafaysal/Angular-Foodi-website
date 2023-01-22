import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
// categoriesId:any[]=[
//   {id:1},{id:2},{id:3},{id:4},{id:5}]

  constructor() { }

  ngOnInit(): void {
  }
  //  goTODetailsPage(item: any){
  //   this.router.navigate(["categories",item.id])
  //  }

}
