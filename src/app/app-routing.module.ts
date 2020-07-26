import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
  { path: 'goods', component: GoodsListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/goods', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
