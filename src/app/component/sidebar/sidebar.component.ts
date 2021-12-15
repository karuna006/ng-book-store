import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() menu!:String;
  @Input() page!:String;
  title:string = 'Book Store';
  author_menu!:string;
  books_menu!:string;
  publisher_menu!: string;
  dashboard_menu!: string;
  dashboard_menu_active!: string;
  author_menu_active!:string;
  books_menu_active!:string;
  publisher_menu_active!: string;
  author_menu_a!:string;
  books_menu_a!:string;
  publisher_menu_a!: string;
  author_menu_v!:string;
  books_menu_v!:string;
  publisher_menu_v!: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.menu);
    if(this.menu == 'author')
    {
      this.author_menu = 'menu-open';
      this.author_menu_active = 'active';
      if(this.page == 'author_a')
      {
        this.author_menu_a = 'active';
      }
      else if(this.page == 'author_v')
      {
        this.author_menu_v = 'active';
        // console.log('imin:',this.page);
      }
    }
    else if(this.menu == 'books')
    {
      this.books_menu = 'menu-open';
      this.books_menu_active = 'active';
      if(this.page == 'books_a')
      {
        this.books_menu_a = 'active';
      }
      else if(this.page == 'books_v')
      {
        this.books_menu_v = 'active';
      }
    }
    else if(this.menu == 'publisher')
    {
      this.publisher_menu = 'menu-open';
      this.publisher_menu_active = 'active';
      if(this.page == 'publisher_a')
      {
        this.publisher_menu_a = 'active';
      }
      else if(this.page == 'publisher_v')
      {
        this.publisher_menu_v = 'active';
      }
    }
    else if(this.menu == 'dashboard')
    {      
      console.log('data:',this.menu);
      this.dashboard_menu_active = 'active';
    }
  }
}
