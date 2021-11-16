import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
items:Item[]=[];
item:Item;
  constructor(private item_service:ItemService,private router:Router) {
    //call item service method
    item_service.GetAllItems().subscribe(response=>{
      this.items=response
      console.log(this.items);
    },error=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
  }
  Getitem(itemId:number)
  {
     // localStorage.Itemid=itemId;
      this.router.navigateByUrl("/view-item/"+itemId);

  }
  DeleteItem(itemId:number)
  {
    this.item_service.DeleteItem(itemId).subscribe(response=>{

    },error=>{
      console.log(error);

    });
    location.reload();
  }


}
