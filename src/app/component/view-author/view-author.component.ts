import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  author: any[] = [];
  menu:string = 'author';
  page:string = 'author_v';
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getAuthor().subscribe(
      (author: any[])=>(this.author = author)      
    );   
  }

  Deleteauthor(author: any)
  {
    this.addservice.deleteAuthor(author).subscribe(()=>
      {
        // this.author=this.author.filter(t => t.id !== author.id);
        this.loadAuthorData();        
      }
    );
  }

  loadAuthorData()
  {
    this.addservice.getAuthor().subscribe(
      (author: any[])=>(this.author = author)      
    );
  }
}
