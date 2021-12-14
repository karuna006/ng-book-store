import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit {  
  publisher: any[] = [];
  isMasterSel:boolean = false;
  checkedCategoryList:any;
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getPublisher().subscribe(
      (publisher: any[])=>
      {
        this.publisher = publisher;
        for (let index = 0; index < publisher.length; index++)
        {
          this.publisher[index]['isSelected'] = false;          
        }            
      }
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

  checkUncheckAll()
  {
    for (var i = 0; i < this.publisher.length; i++) {
      this.publisher[i].isSelected = this.isMasterSel;
    }
  }

  getCheckedItemList()
  {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.publisher.length; i++) {
      if(this.publisher[i].isSelected)
      this.checkedCategoryList.push(this.publisher[i]['name']);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
    console.log(this.checkedCategoryList);
  }
}
