import { Injectable } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { item } from '../models/items';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //user state (logIn & logOut)
  public userToken = new BehaviorSubject<any>(null);
  public userToken$ = this.userToken.asObservable();

  constructor(private fireStore:Firestore , private auth:AngularFireAuth) {
    // detect any singup , login or logout 
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        this.userToken.next(user);
        console.log("user available**");
      }
      else
      {
        this.userToken.next(null);
        console.log("logOut**");
      }
    })
  }

  //get all items from firestore
  getAllItems()
  {
    let $itemsRef = collection(this.fireStore,"items");
    return collectionData($itemsRef,{idField:"itemId"}) as Observable<item[]>;
  }

  //get items from firestore depending on condition
  getItemsWCondition(condition:string)
  {
    let $itemsRef = collection(this.fireStore,"items");
    let Q = query($itemsRef,where("category","==",condition));
    return collectionData(Q,{idField:"itemId"}) as Observable<item[]>;
  }

  /*********************************login & signUp*********************************/
  //signUp with email and password and add other data
  signUp(form:NgForm)
  {
    return this.auth.createUserWithEmailAndPassword(form.value.email,form.value.password).then(cred => {
      let $usersRef = doc(this.fireStore,"users",(cred.user?.uid)!);
      return setDoc($usersRef,{
        firstName:form.value.firstName,
        lastName:form.value.lastName,
        mobileNumber:form.value.mobileNumber,
        cart:[],
        fav:[],
        addresses:[],
        role:0,
      });
    })
  }

  //signIn with email and password
  signIn(form:NgForm)
  {
    return this.auth.signInWithEmailAndPassword(form.value.email,form.value.password);
  }

  // singOut the current user
  signOut()
  {
    this.auth.signOut();
  }

  // (registerationForm.value.address)
}
