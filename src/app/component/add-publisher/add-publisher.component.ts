import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {

  name!:string;

  constructor(private addservice:AddService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.name);
    if(!this.name)
    {
      alert('Please add a Publisher name!');
      // return;
    }

    const addPublisher = {
      name: this.name
    }

    this.addservice.addPublisher(addPublisher).subscribe(()=>{alert('author added')});

    this.name = '';
  }
}
