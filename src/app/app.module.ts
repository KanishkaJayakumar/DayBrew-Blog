import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { SubscriptionsFormComponent } from "./subscriptions-form/subscriptions-form.component";
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { ShowpostComponent } from './posts/showpost/showpost.component';
import { ShowpostService } from './showpost.service';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { CommentFormComponent } from "./comments/comment-form/comment-form.component";
import { CommentsListComponent } from "./comments/comments-list/comments-list.component";
import { LoginComponent } from './authent/login/login.component';
import { RegisterComponent } from './authent/registration/registration.component';
import { AuthService } from './auth.service';






@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, DashboardComponent, CategoriesComponent, NewPostComponent, ShowpostComponent, AllPostComponent, LoginComponent, RegisterComponent
    ],
    providers: [ShowpostService,AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CategoryNavbarComponent,
        SubscriptionsFormComponent,
        AboutusComponent,
        PostCardComponent,
        ContactUsComponent,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AngularEditorModule,
        CommentFormComponent,
        CommentsListComponent
    ]
})
export class AppModule { }
