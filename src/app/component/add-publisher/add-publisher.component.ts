import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";
import { Router,ActivatedRoute } from '@angular/router';
import { NotiService } from '../../services/noti.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {

  name!:string;
  isAddMode: boolean = true;
  public id!: any;
  routeSub: any;
  btn:any = 'Submit';
  title:any = 'Add';
  menu:string = 'publisher';
  page:string = 'publisher_a';

  constructor(private addservice:AddService,private router: Router,private notiservice:NotiService) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2];    
    this.isAddMode = !this.id;    
    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.title = 'Update';
      this.addservice.getById(this.id,'publisher').subscribe(
        (author_data)=>
        {
          this.routeSub = author_data;
          this.name = this.routeSub.name;          
        });
    }   
  }

  onSubmit()
  {
    
    if(!this.name)
    {      
      this.notiservice.showError("Please enter the author name !!", "Warning");
      return;
    }

    const addPublisher = {
      name: this.name
    }

    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.title = 'Update';      
      this.addservice.updateData(this.routeSub.id,addPublisher,'publisher').subscribe(
        ()=>
        {
          this.router.navigate(['/view-Publisher']);
          this.notiservice.showSuccess("Publisher updated", "Updated Successfully");          
        });
    } 
    else
    {
      this.addservice.addPublisher(addPublisher).subscribe(
        ()=>
        {
          // alert('Publisher added')
          this.notiservice.showSuccess("Publisher added", "added Successfully");          
        });      
    }

    this.name = '';
  }
}
