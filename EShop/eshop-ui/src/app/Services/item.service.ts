import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  Item_Url='http://localhost:15453/eshop/Item/'
  constructor(private http:HttpClient) { }
  GetAllItems():Observable<Item[]>
  {
    return this.http.get<Item[]>(this.Item_Url+'GetAll');
  }
  GetItem(itemId:Number):Observable<Item>
  {
    return this.http.get<Item>(this.Item_Url+'GetItem/'+itemId);
  }
  DeleteItem(itemId:Number):Observable<any>
  {
    return this.http.delete(this.Item_Url+'DeleteItem/'+itemId);
  }
  AddItem(item:Item):Observable<any>
  {

    return this.http.post(this.Item_Url+'AddItem',item);
  }
  Edititem(item:Item):Observable<any>
  {

    return this.http.put(this.Item_Url+'Edititem',item);
  }

}
