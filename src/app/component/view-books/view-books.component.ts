import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books:any[] = [];
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getBooks().subscribe(
      (books: any[])=>(this.books = books)      
    );   
  }

  Deletebook(author: any)
  {
    this.addservice.deleteBooks(author).subscribe(()=>
      {
        // this.author=this.author.filter(t => t.id !== author.id);
        this.loadBookData();        
      }
    );
  }

  loadBookData()
  {
    this.addservice.getBooks().subscribe(
      (books: any[])=>(this.books = books)
    );
  }
}