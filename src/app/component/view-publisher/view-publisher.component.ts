import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit {

  publisher: any[] = [];
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getPublisher().subscribe(
      (publisher: any[])=>(this.publisher = publisher)      
    );
  }

  DeletePublisher(publisher: any)
  {
    this.addservice.deletePublisher(publisher).subscribe(()=>
      {
        // this.author=this.author.filter(t => t.id !== author.id);
        this.loadPublisherData();        
      }
    );
  }

  loadPublisherData()
  {
    this.addservice.getPublisher().subscribe(
      (publisher: any[])=>(this.publisher = publisher)      
    );
  }
}
