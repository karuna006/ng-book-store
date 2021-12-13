import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, ObservableInput, retry} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private authorAPI = 'http://localhost:3000/author';
  private publisherAPI = 'http://localhost:3000/publisher';
  private bookAPI = 'http://localhost:3000/books';
  private setAPI!:string;  
  constructor(private http:HttpClient) { }

  getAPIbyset(set:String)
  {
    if(set == 'author')
    {
      this.setAPI = this.authorAPI;
    }
    else if(set == 'publisher')
    {
      this.setAPI = this.publisherAPI;
    }
    else
    {
      this.setAPI = this.bookAPI;
    }
    return this.setAPI;
  }

  addAuthor(task: any):Observable<Task>
  {
    // this.notifyService.showSuccess("New Task Addedd !!", "Success");
    return this.http.post<Task>(this.authorAPI,task,httpOptions);
  }

  getAuthor() : Observable<any[]>
  {
    return this.http.get<any[]>(this.authorAPI);
  }

  deleteAuthor(author:any) : Observable<any[]>
  {
    const url = `${this.authorAPI}/${author.id}`;
    // this.notifyService.showSuccess("Task Deleted !!", "Success");
    return this.http.delete<any>(url);
  }

  addPublisher(task: any):Observable<Task>
  {
    // this.notifyService.showSuccess("New Task Addedd !!", "Success");
    return this.http.post<Task>(this.publisherAPI,task,httpOptions);
  }

  getPublisher() : Observable<any[]>
  {
    return this.http.get<any[]>(this.publisherAPI);
  }

  deletePublisher(publisher:any) : Observable<any[]>
  {
    const url = `${this.publisherAPI}/${publisher.id}`;
    // this.notifyService.showSuccess("Task Deleted !!", "Success");
    return this.http.delete<any>(url);
  }

  addBooks(task: any):Observable<Task>
  {
    // this.notifyService.showSuccess("New Task Addedd !!", "Success");
    return this.http.post<Task>(this.bookAPI,task,httpOptions);
  }

  getBooks() : Observable<any[]>
  {
    return this.http.get<any[]>(this.bookAPI);
  }

  deleteBooks(books:any) : Observable<any[]>
  {
    const url = `${this.bookAPI}/${books.id}`;
    // this.notifyService.showSuccess("Task Deleted !!", "Success");
    return this.http.delete<any>(url);
  }

  getById(id:number,set:string) : Observable<any[]>
  {
    const url = `${this.getAPIbyset(set)}/${id}`;
    return this.http.get<any[]>(url);
  }

  updateData(id:any,data:any,set:string):Observable<any>
  {
    const url = `${this.getAPIbyset(set)}/${id}`;
    // this.notifyService.showSuccess("Task reminder Updated !!", "Success");
    return this.http.put<any>(url,data,httpOptions);
  }
}
