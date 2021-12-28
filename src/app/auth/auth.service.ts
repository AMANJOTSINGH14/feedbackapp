import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
auth:boolean=false;
token:any
userId:any;
user:any=343434|43434|34344;
authListener=new BehaviorSubject<boolean>(false);
userSubject=new BehaviorSubject<any>(null)
errorSubject=new BehaviorSubject<any>(null)
error:any;
constructor(private http:HttpClient) { }

isAuth(){
  return this.auth;
}
isError(){
  return this.error
}
getToken(){
  return this.token
}
createUser(email:string,password:string){
  const authData={email:email,password:password};
  this.http.post("http://localhost:3000/api/user/signup",authData).subscribe(
    response=>{this.authListener.next(false)
      console.log(response)
    },error=>{

      if(error){
        this.errorSubject.next(error.error.message)
      }
      this.authListener.next(false);
    }
  )
}
login(email:string,password:string){
  const authData={email:email,password:password};
  this.http.post<{token:string ,expiresIn: number,userId:string}>("http://localhost:3000/api/user/login",authData).subscribe(
    response=>{
      console.log(response)
      this.userId=response.userId;
      this.userSubject.next(this.userId)
      const expire=response.expiresIn

      this.token=response.token;
this.authListener.next(true)
this.auth=true

    },error =>{
     
      if(error){
    this.errorSubject.next(error.error)
      }
      console.log(error)
    }
  )
}
logout(){

  this.token=null;

this.authListener.next(false);

this.userSubject.next(null)

}
}
