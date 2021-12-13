import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from "./component/add-books/add-books.component";
import { ViewBooksComponent } from "./component/view-books/view-books.component";
import { AddAuthorComponent } from "./component/add-author/add-author.component";
import { ViewAuthorComponent } from "./component/view-author/view-author.component";
import { AddPublisherComponent } from "./component/add-publisher/add-publisher.component";
import { ViewPublisherComponent } from "./component/view-publisher/view-publisher.component";

const Routes: Routes = [  
  {
    path: 'add-books',
    component:AddBooksComponent,
    children:[{
      path :':id',
      component:AddBooksComponent,
    }]
  },
  {
    path: 'view-books',
    component:ViewBooksComponent
  },
  {
    path: 'add-author',
    component:AddAuthorComponent,
    children:[{
      path :':id',
      component:AddAuthorComponent,
    }]
  },
  {
    path: 'view-author',
    component:ViewAuthorComponent
  },
  {
    path: 'add-Publisher',
    component:AddPublisherComponent,
    children:[{
      path :':id',
      component:AddPublisherComponent,
    }]
  },
  {
    path: 'view-Publisher',
    component:ViewPublisherComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }