import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin_view/home/home.component';
import { AdminSignUp } from './admin_view/signUp/signUp.component';
import { CustomerHomeComponent } from './customer_view/home/home.component';
import { CustomerSignUpComponent } from './customer_view/sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'' , component:CustomerHomeComponent},
  {path:'AdminHomeComponent' , component:AdminHomeComponent},
  {path:'AdminSignUp' , component:AdminSignUp},
  {path:'AdminHomeComponent/home' , component:AdminHomeComponent},
  {path:'AdminHomeComponent/about' , component:AdminHomeComponent},
  {path:'AdminHomeComponent/service' , component:AdminHomeComponent},
  {path:'AdminHomeComponent/fruits' , component:AdminHomeComponent},
  {path:'AdminHomeComponent/vegetables' , component:AdminHomeComponent},
  {path:'AdminHomeComponent/contact-us' , component:AdminHomeComponent},
  {path:'CustomerSignUp' , component:CustomerSignUpComponent},
  {path:'SignIn' , component:SignInComponent},
  {path:'CustomerHomeComponent/home' , component:CustomerHomeComponent},
  {path:'CustomerHomeComponent/about' , component:CustomerHomeComponent},
  {path:'CustomerHomeComponent/service' , component:CustomerHomeComponent},
  {path:'CustomerHomeComponent/fruits' , component:CustomerHomeComponent},
  {path:'CustomerHomeComponent/vegetables' , component:CustomerHomeComponent},
  {path:'CustomerHomeComponent/contact-us' , component:CustomerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
