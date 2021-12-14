import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { NotiService } from '../../services/noti.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  author :any[] = [];
  publisher :any[] = [];
  title!:String;
  author_name!:String;
  publisher_name!:String;
  edition!:String;
  cover_pic!:string;
  sample_img!:string;
  isAddMode: boolean = true;
  public id!: any;
  routeSub: any;
  btn:any = 'Submit';
  div_title:any = 'Add';
  menu:string = 'books';
  page:string = 'books_a';
  // add_books = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   author: new FormControl('', [Validators.required]),
  //   publisher: new FormControl('', [Validators.required]),
  //   edition: new FormControl('', [Validators.required]),
  //   cover_pic: new FormControl('', [Validators.required]),
  //   sample_img: new FormControl('', [Validators.required])
  // });

  constructor(private addservice:AddService,private router: Router,private route: ActivatedRoute,private notiservice:NotiService) { }  

  ngOnInit(): void {
    this.addservice.getPublisher().subscribe(
      (publisher: any[])=>(this.publisher = publisher)      
    );

    this.addservice.getAuthor().subscribe(
      (author: any[])=>(this.author = author)      
    );   

    this.id = this.router.url.split('/')[2];    
    this.isAddMode = !this.id;    
    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.div_title = 'Update';
      this.addservice.getById(this.id,'books').subscribe(
        (books_data)=>
        {
          this.routeSub = books_data;
          this.title = this.routeSub.title;    
          this.author_name = this.routeSub.author_name;      
          this.publisher_name = this.routeSub.publisher_name;
          this.edition = this.routeSub.edition;          
        });
    }   
  }

  // get f(){
  //   return this.add_books.controls;
  // }

  onSubmit()
  {    
    if(!this.title)
    {      
      this.notiservice.showError("Please enter the book name !!", "Warning");
      return;
    }

    if(!this.author_name)
    {      
      this.notiservice.showError("Please Select a author !!", "Warning");
      return;
    }

    if(!this.publisher_name)
    {
      this.notiservice.showError("Please enter a publisher !!", "Warning");      
      return;
    }

    if(!this.edition)
    {      
      this.notiservice.showError("Please enter a edition !!", "Warning");
      return;
    }

    const newBook = {
      title: this.title,
      author_name: this.author_name,
      publisher_name: this.publisher_name,
      edition: this.edition,
      // cover_pic: this.cover_pic,
      // sample_img: this.sample_img
    }  

    if(!this.isAddMode)
    {
      this.btn = 'Update';
      this.div_title = 'Update';      
      this.addservice.updateData(this.routeSub.id,newBook,'books').subscribe(
        ()=>
        {          
          this.router.navigate(['/view-books']);
          this.notiservice.showSuccess("Book updated", "Updated Successfully");
        });
    }
    else
    {      
      this.addservice.addBooks(newBook).subscribe(
        ()=>
        {          
          this.notiservice.showSuccess("Book added", "Added Successfully");
        });
    }

    this.title = '';
    this.author_name = '';
    this.publisher_name = '';
    this.edition = '';
    // this.cover_pic = '';
    // this.sample_img = '';
  }
}
