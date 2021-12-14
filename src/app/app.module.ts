import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';  
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { ViewBooksComponent } from './component/view-books/view-books.component';
import { AddAuthorComponent } from './component/add-author/add-author.component';
import { ViewAuthorComponent } from './component/view-author/view-author.component';
import { AddPublisherComponent } from './component/add-publisher/add-publisher.component';
import { ViewPublisherComponent } from './component/view-publisher/view-publisher.component';
import { LoginComponent } from "./component/login/login.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddBooksComponent,
    ViewBooksComponent,
    AddAuthorComponent,
    ViewAuthorComponent,
    AddPublisherComponent,
    ViewPublisherComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
