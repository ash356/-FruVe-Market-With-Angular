import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';


import { AdminSignUp } from './admin_view/signUp/signUp.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './customer_view/header/header.component';
import { CustomerSignUpComponent } from './customer_view/sign-up/sign-up.component';
import { AdminHomeComponent } from './admin_view/home/home.component';
import { CustomerHomeComponent } from './customer_view/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminSignUp,
    FooterComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    SignInComponent,
    HeaderComponent,
    CustomerSignUpComponent
    ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
