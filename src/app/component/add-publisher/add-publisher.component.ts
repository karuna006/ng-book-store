import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";
import { Router,ActivatedRoute } from '@angular/router';

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

  constructor(private addservice:AddService,private router: Router) { }

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
      alert('Please add a Publisher name!');
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
        });
    } 
    else
    {
      this.addservice.addPublisher(addPublisher).subscribe(()=>{alert('Publisher added')});      
    }

    this.name = '';
  }
}
