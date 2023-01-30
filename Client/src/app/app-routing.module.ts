import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ProductinsideComponent } from './productinside/productinside.component';


const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'productinside',component:ProductinsideComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
