import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './Components/Supplier/add-item/add-item.component';
import { ViewItemComponent } from './Components/Supplier/view-item/view-item.component';
import { ViewItemsComponent } from './Components/Supplier/view-items/view-items.component';

const routes: Routes = [
  {path:'view-items',component:ViewItemsComponent},
  {path:'add-item',component:AddItemComponent},
  {path:'view-item/:Itemid',component:ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
