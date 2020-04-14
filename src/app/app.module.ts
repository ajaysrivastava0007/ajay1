import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { ElectronicsSectionComponent } from './electronics-section/electronics-section.component';
import { GrocerySectionComponent } from './grocery-section/grocery-section.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { MensDescriptionComponent } from './mens-description/mens-description.component';
import { WomensDescriptionComponent } from './womens-description/womens-description.component';
import { ElectronicsDescriptionComponent } from './electronics-description/electronics-description.component';
import { GroceryDescriptionComponent } from './grocery-description/grocery-description.component';
import { SaveForLaterComponent } from './save-for-later/save-for-later.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MenSectionComponent,
    WomenSectionComponent,
    ElectronicsSectionComponent,
    GrocerySectionComponent,
    InventoryComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    ProductDescriptionComponent,
    CheckoutComponent,
    OrderPlacedComponent,
    MensDescriptionComponent,
    WomensDescriptionComponent,
    ElectronicsDescriptionComponent,
    GroceryDescriptionComponent,
    SaveForLaterComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
