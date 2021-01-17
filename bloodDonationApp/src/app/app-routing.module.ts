import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'head',component: HeadComponent},
  {path: '', component: HomeComponent},
  {path: 'menu',component: MenuComponent},
  {path:'signup',component: SignupComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
