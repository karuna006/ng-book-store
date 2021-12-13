import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  author :any[] =[];
  publisher :any[] =[];
  title!:String;
  author_name!:String;
  publisher_name!:String;
  edition!:String;
  cover_pic!:string;
  sample_img!:string;
  // add_books = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   author: new FormControl('', [Validators.required]),
  //   publisher: new FormControl('', [Validators.required]),
  //   edition: new FormControl('', [Validators.required]),
  //   cover_pic: new FormControl('', [Validators.required]),
  //   sample_img: new FormControl('', [Validators.required])
  // });

  constructor(private addservice:AddService) { }  

  ngOnInit(): void {
    this.addservice.getPublisher().subscribe(
      (publisher: any[])=>(this.publisher = publisher)      
    );

    this.addservice.getAuthor().subscribe(
      (author: any[])=>(this.author = author)      
    );   
  }

  // get f(){
  //   return this.add_books.controls;
  // }

  onSubmit()
  {
    // console.log(this.name);
    if(!this.title)
    {
      alert('Please add a book name!');
      return;
    }

    if(!this.author_name)
    {
      alert('Please select a Author name!');
      return;
    }

    if(!this.publisher_name)
    {
      alert('Please select a publisher name!');
      return;
    }

    if(!this.edition)
    {
      alert('Please add a edition!');
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

    // console.log(newBook);

    this.addservice.addBooks(newBook).subscribe(()=>{alert('new Book added')});

    this.title = '';
    this.author_name = '';
    this.publisher_name = '';
    this.edition = '';
    // this.cover_pic = '';
    // this.sample_img = '';
  }
}
