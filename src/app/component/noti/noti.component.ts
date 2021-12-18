import { Component, OnInit } from '@angular/core';
import { AddService } from "../../services/add.service";

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {

  noti!: any[];
  category:string = '';
  list:string = '1';
  listdata!:any;
  dumplistdata:any[] = [];
  listname!:string;
  table:boolean = false;
  selectedlist:any;
  title!:string;
  message!:string;
  arr_name!:any;
  sendToId_list!:any[];  
  constructor(private addservice:AddService) { }

  ngOnInit(): void {
    this.addservice.getnoti().subscribe(
      (noti: any[])=>
        {
          this.noti = noti.slice(0,10);          
        }      
    );
  }

  changeData(value:any){
    return JSON.stringify(value);
  }

  onCategory(value:any)
  {
    this.category = value.target.value;
    this.loadData();
  } 

  onCategory2(value:any)
  {
    this.list = value.target.value;
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
                for (let index = 0; index < this.listdata.length; index++)
                {
                  this.listdata[index]['isSelected'] = false;          
                }      
                // console.log(this.listdata);              
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
                for (let index = 0; index < this.listdata.length; index++)
                {
                  this.listdata[index]['isSelected'] = false;
                }      
                // console.log(this.listdata);
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
      console.log('as',this.sendToId_list);
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
    //   console.log('imin');
    //   res[this.arr_name] = res['_id'];
    //   // delete res['_id'];
    // });


    return this.sendToId_list;
  }

  getlist():any
  {
    if(this.category == '2')
    { 
      this.selectedlist = [];     
      this.addservice.getcus().subscribe(
        (noti: any)=>
          {                        
            this.selectedlist.push(noti);            
          }
      );               
    }
    else
    {      
      this.selectedlist = [];
      this.addservice.geteng().subscribe(
        (noti: any)=>
          {
            this.selectedlist.push(noti);             
          }      
      );                       
    }
    return this.selectedlist;
  }

  setselectedData(value:any)
  {
    if(value.currentTarget.checked)
    {      
      this.selectedlist.push(JSON.parse(value.target.value));      
    }
    else
    {
      let index = this.selectedlist.indexOf(JSON.parse(value.target.value));
      this.selectedlist.forEach( (res:any, index:any, object:any) => {
        if(JSON.parse(value.target.value)._id.$oid == res._id.$oid)
        {
          object.splice(index, 1);
        }
      });            
    }    
  }

  onSubmit(event:any)
  {    
    if(this.category == '1')
    {
      this.arr_name ="_engineers_id";   
    }
    else
    {
      this.arr_name ="_customer_id"; 
    }
    
    const sendNoti = {
      title: this.title,
      message: this.message,
      [this.arr_name]: this.sendToId(),
    }
    console.log(sendNoti);
    // console.log(this.selectedlist);
  }
}
