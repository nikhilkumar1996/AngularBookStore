import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallbooksComponent } from './getallbooks/getallbooks.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'books',component:GetallbooksComponent},
    {path:'book/:data',component:BookDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent},
    {path:'wishlist',component:WishlistComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
