import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {

  noti: any[] = [];
  category:string = '';
  list:string = '1';
  listdata!:any;
  dumplistdata:any[] = [];
  listname!:string;
  table:boolean = false;
  selectedlist:any;
  title!:string;
  message!:string;
  arr_name!:{};
  sendToId_list:any[] = [];
  messageCT =new FormControl('',[Validators.required,Validators.max(8)]);
  customer = new FormGroup({
    name:new FormControl(''),
    age:new FormControl('')
  })
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getnoti().subscribe(
      (noti: any[])=>
        {
          this.noti = noti.slice(0,10);          
        }      
    );
    
  }
  print(){
  
    console.log("this.messageCT.value=====>",this.messageCT.value);
    if(!this.messageCT.valid){
      alert("Message In Valid");
    }
    else{
      alert("Message Valid");
    }
  }

  changeData(value:any){
    return JSON.stringify(value);
  }
  onCategory(value:any)
  {
    this.loadData();
  } 

  loadData()
  {
    if(this.list != '1')
    {
      if(this.category != '')
      {
        if(this.category == '2')
        {
          this.addservice.getcus().subscribe(
            (noti: any[])=>
              {
                this.listdata = noti.slice(0,10);                
              }      
          );
          this.listname = 'Custome List';          
          this.selectedlist = [];
        }
        else
        {
          this.addservice.geteng().subscribe(
            (noti: any[])=>
              {
                this.listdata = noti.slice(0,10);
              }      
          );
          this.listname = 'Engineers List';          
          this.selectedlist = [];
        }
      }
      else
      {
        this.resetData();
      }
    }
    else
    {
      this.resetData();
    }
  }

  resetData()
  {
    this.listdata = [];
    this.listname = '';
    this.selectedlist = [];
  }

  sendToId():any
  {
    if(this.list != '1')
    {
      this.sendToId_list = this.selectedlist;
    }
    else
    {
      this.sendToId_list = this.getlist();
    }

    if(this.category == '1')
    {
      this.arr_name ="_engineers_id";   
    }
    else
    {
      this.arr_name ="_customer_id"; 
    }

    // this.sendToId_list.forEach( res => {      
    //   res[this.arr_name] = res['_id'];
    //   delete res['_id'];
    // });

    console.log(this.sendToId_list);    

    return this.sendToId_list;
  }

  getlist():any
  {
    if(this.category == '2')
    {      
      this.addservice.getcus().subscribe(
        (noti: any[])=>
          {
            this.selectedlist.push(noti); 
            // this.dumplistdata.forEach( res => {
            //     this.selectedlist.push(res._id.$oid);
            // });
          }
      );               
    }
    else
    {      
      this.addservice.geteng().subscribe(
        (noti: any[])=>
          {
            this.selectedlist.push(noti); 
            // this.dumplistdata.forEach( res => {
            //     this.selectedlist.push(res._id.$oid);
            // });
          }      
      );                       
    }
    return this.selectedlist;
  }

  setselectedData(value:any)
  {
    if(value.currentTarget.checked)
    {
      console.log(value.target.value);
      this.selectedlist.push(JSON.parse(value.target.value));
      // console.log(">>>>>>>",this.selectedlist)
    }
    else
    {
      let index = this.selectedlist.indexOf(value.target.value);
      if (index > -1)
      {
        this.selectedlist.splice(index, 1);
      }
    }    
  }

  onSubmit(event:any)
  {
    // if(this.category == '1')
    // {
    //   this.arr_name ="_engineers_id";   
    // }
    // else
    // {
    //   this.arr_name ="_customer_id"; 
    // }

    const sendNoti = {
      title: this.title,
      message: this.message,
      // [this.arr_name]:
      // this.sendToId(),
    }
    console.log(sendNoti);
    // console.log(this.arr_name);
  }
}
