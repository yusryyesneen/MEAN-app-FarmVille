import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { OurproductsComponent } from './ourproducts/ourproducts.component';
import { ProductinsideComponent } from './productinside/productinside.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:HeroComponent},
  //{path:'productinside',component:ProductinsideComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'ourproducts',component:OurproductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeroComponent,FooterComponent,HeaderComponent,LoginComponent,RegisterComponent,AboutComponent,CartComponent,CheckoutComponent,OurproductsComponent]
