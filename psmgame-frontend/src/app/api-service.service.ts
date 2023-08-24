import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lists} from "./models/list.model";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }

   getLists(){
    return this._http.get('http://localhost:3000/lists');
  }


  createList(newList: Lists){
     this._http.post('http://localhost:3000/lists', newList).subscribe()
  }

}
