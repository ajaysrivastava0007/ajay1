import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenSectionComponent} from './men-section/men-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { ElectronicsSectionComponent } from './electronics-section/electronics-section.component';
import { GrocerySectionComponent } from './grocery-section/grocery-section.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartComponent } from './cart/cart.component'







const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: "men", component: MenSectionComponent},
  {path: "women", component: WomenSectionComponent},
  {path: "electronics", component: ElectronicsSectionComponent},
  {path: "grocery", component: GrocerySectionComponent},
  {path: 'login', component: LoginPageComponent}, 
  {path: 'register', component: RegisterComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
