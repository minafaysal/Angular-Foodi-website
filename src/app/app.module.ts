import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './body/categories/categories.component';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { ShopComponent } from './body/shop/shop.component';
import { OfferComponent } from './body/offer/offer.component';
import { BestDeliveryComponent } from './body/best-delivery/best-delivery.component';
import { ReviewsComponent } from './body/reviews/reviews.component';
import { AlloffersComponent } from './body/alloffers/alloffers.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { ProfileComponent } from './body/profile/profile.component';
import { PrevOrderComponent } from './body/profile/prev-order/prev-order.component';
import { FavouriteComponent } from './body/profile/favourite/favourite.component';
import { SavedAddressComponent } from './body/profile/saved-address/saved-address.component';
import { MyProfileComponent } from './body/profile/my-profile/my-profile.component';
import { LoginComponent } from './Registration/login/login.component';
import { SignUpComponent } from './Registration/sign-up/sign-up.component';
import { MainRegistrationComponent } from './Registration/main-registration/main-registration.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { Routes } from '@angular/router';
import { AddaddressComponent } from './body/profile/addaddress/addaddress.component';
import { WeekOffersComponent } from './body/week-offers/week-offers.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainpageComponent } from './body/mainpage/mainpage.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    AboutusComponent,
    ShopComponent,
    OfferComponent,
    BestDeliveryComponent,
    ReviewsComponent,
    AlloffersComponent,
    ProfileComponent,
    MyProfileComponent,
    PrevOrderComponent,
    FavouriteComponent,
    SavedAddressComponent,
    LoginComponent,
    SignUpComponent,
    MainRegistrationComponent,
    AddaddressComponent,
    WeekOffersComponent,
    CartComponent,
    CheckoutComponent,
    MainpageComponent,
    CategoriesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    ReactiveFormsModule
    
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],//yousef
  bootstrap: [AppComponent]
})
export class AppModule { }
