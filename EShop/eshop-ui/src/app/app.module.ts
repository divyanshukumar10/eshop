import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewItemsComponent } from './Components/Supplier/view-items/view-items.component';
import { ItemService } from './Services/item.service';
import { AddItemComponent } from './Components/Supplier/add-item/add-item.component';
import { ViewItemComponent } from './Components/Supplier/view-item/view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent,
    AddItemComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
