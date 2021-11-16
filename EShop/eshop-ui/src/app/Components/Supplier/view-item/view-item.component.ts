import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/Services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
item:Item;
itemId:number;
  constructor(private item_service:ItemService,private active:ActivatedRoute) {

    this.active.params.subscribe(params=>this.itemId=params['Itemid'])
    console.log(this.itemId);
    this.item_service.GetItem(this.itemId).subscribe(response=>{
      this.item=response;
      console.log(this.item);
    })
   }

  ngOnInit(): void {
  }

}
