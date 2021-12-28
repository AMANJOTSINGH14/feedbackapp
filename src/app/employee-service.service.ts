
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators'
import { formShape } from './form.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  storeFeedback:any= [];
  startedEditing = new Subject<number>();
  constructor(private http:HttpClient) { }

  addFeedback(obj:any){
    // console.log(obj);
   return this.http.post('http://localhost:3000/api/post',obj)
    // this.storeFeedback.push(obj);
    }

    listFeedback(){
      // console.log(this.storeFeedback)
      return this.http.get<any>('http://localhost:3000/api/post').pipe(
        map(data=>{
         return data.post


        }))
      // ).subscribe(
      //   data=>{this.storeFeedback=data

      //   })
        // return this.storeFeedback;
    }
}
