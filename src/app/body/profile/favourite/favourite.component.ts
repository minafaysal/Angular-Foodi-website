import { Component, OnInit } from '@angular/core';
import {FavouriteService} from '../../../services/favourite.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private FavouriteService:FavouriteService, private router: Router) { }
  newproduct:any=[];

  ngOnInit(): void {
    this.newproduct=this.FavouriteService.getAllProduct();
  }
  deleteproduct(productId: any) {
    this.newproduct.splice(productId-1,1);
    console.log(this.newproduct)
  }

}
