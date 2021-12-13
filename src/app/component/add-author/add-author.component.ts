import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  name!:string;
  isAddMode: boolean = true;
  public id!: any;
  routeSub: any;
  btn:any = 'Submit';
  title:any = 'Add';
  constructor(private addservice:AddService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2];    
    this.isAddMode = !this.id;    
    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.title = 'Update';
      this.addservice.getById(this.id,'author').subscribe(
        (author_data)=>
        {
          this.routeSub = author_data;
          this.name = this.routeSub.name;          
        });
    }   
  }

  onSubmit()
  {
    console.log(this.name);
    if(!this.name)
    {
      alert('Please add a Author name!');
      return;
    }

    const newAuthor = {
      name: this.name
    }

    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.title = 'Update';      
      this.addservice.updateData(this.routeSub.id,newAuthor,'author').subscribe(
        ()=>
        {
          // alert('author Updated')
          this.router.navigate(['/view-author']);
        });
    } 
    else
    {
      this.addservice.addAuthor(newAuthor).subscribe(()=>{alert('author added')});
    }
    
    this.name = '';
  }
}
