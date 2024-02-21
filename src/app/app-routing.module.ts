import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ShowpostComponent } from './posts/showpost/showpost.component';
import { LoginComponent } from './authent/login/login.component';
import { RegisterComponent } from './authent/registration/registration.component';


const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'category',component: SingleCategoryComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'post',component:SinglePostComponent},
  {path:'login',component:LoginComponent},
  {path:'term-condition',component:TermsAndConditionsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutusComponent},
  {path:'allposts',component:AllPostComponent},
  {path:'newpost',component:NewPostComponent},
  {path:'showpost',component:ShowpostComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
