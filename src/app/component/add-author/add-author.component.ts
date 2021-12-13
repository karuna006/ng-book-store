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
  constructor(private addservice:AddService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');    
    // this.isAddMode = !this.id;
    console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.router.url);        
    if(!this.isAddMode)
    {
      this.addservice.getById(this.id,'author').subscribe((author_data)=>(console.log(author_data)));
    }

    this.route.paramMap.subscribe(params => {
      let date = params.get('id');
      console.log(date); 
    });    
  }

  onSubmit()
  {
    console.log(this.name);
    if(!this.name)
    {
      alert('Please add a Author name!');
      // return;
    }

    const newAuthor = {
      name: this.name
    }

    this.addservice.addAuthor(newAuthor).subscribe(()=>{alert('author added')});

    this.name = '';
  }
}
