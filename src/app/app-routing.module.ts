import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from "./component/add-books/add-books.component";
import { ViewBooksComponent } from "./component/view-books/view-books.component";
import { AddAuthorComponent } from "./component/add-author/add-author.component";
import { ViewAuthorComponent } from "./component/view-author/view-author.component";
import { AddPublisherComponent } from "./component/add-publisher/add-publisher.component";
import { ViewPublisherComponent } from "./component/view-publisher/view-publisher.component";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";
import { AuthGuard } from "./auth.guard";

const Routes: Routes = [  
  {
    path: 'add-books',
    component:AddBooksComponent,
    canActivate: [AuthGuard],
    children:[{
      path :':id',
      component:AddBooksComponent,
    }]
  },
  {
    path: 'view-books',
    component:ViewBooksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-author',
    component:AddAuthorComponent,
    canActivate: [AuthGuard],
    children:[{
      path :':id',
      component:AddAuthorComponent,
    }]
  },
  {
    path: 'view-author',
    component:ViewAuthorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-Publisher',
    component:AddPublisherComponent,
    canActivate: [AuthGuard],
    children:[{
      path :':id',
      component:AddPublisherComponent,
    }]
  },
  {
    path: 'view-Publisher',
    component:ViewPublisherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component:LoginComponent,    
  },
  {
    path: '',
    component:HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component:HomeComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }