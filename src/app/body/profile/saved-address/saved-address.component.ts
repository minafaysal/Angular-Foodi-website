import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.css']
})
export class SavedAddressComponent implements OnInit {
 allAddress:any=[];
//  allAddress:any=[{title:"Home",address:"street 26 jule - Assiut"},{title:"work",address:"street elgomhoureya - Assiut"}];
  input_disabled:boolean=true;

  edit(element:any){
    this.input_disabled= !this.input_disabled;
    setTimeout(()=>{
      element.focus()
    })
}

  remove(element:any){
    console.log(element);
    let index=this.allAddress.indexOf("title",element);
    this.allAddress.slice(index,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
