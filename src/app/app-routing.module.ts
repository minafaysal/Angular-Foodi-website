import { NgModule } from '@angular/core';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { MyProfileComponent } from './body/profile/my-profile/my-profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainpageComponent } from './body/mainpage/mainpage.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';

const routes: Routes = [
  {path:"",component: MainpageComponent},
  {path:"cart",component: CartComponent},
  {path:"checkout",component: CheckoutComponent},
  {path:"categories/:id",component: CategoriesDetailsComponent},
  {path:'profile' ,component:MyProfileComponent,children:[
    {path:'my-profile',component:MyProfileComponent},
    {path:'my-previous-orders',component:PrevOrderComponent},
    {path:'favorites',component:FavouriteComponent},
    {path:'saved-address',component:SavedAddressComponent},]}

 
];

@NgModule({
  imports:
   [RouterModule.forRoot(routes)],

  exports:
   [RouterModule]
})
export class AppRoutingModule { }
