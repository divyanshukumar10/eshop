import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
item:Item;
  constructor(private item_service:ItemService) {
    this.item=new Item();
   }

  ngOnInit(): void {
  }
  AddItem()
  {
    console.log(this.item);
  
    this.item_service.AddItem(this.item).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }

}
