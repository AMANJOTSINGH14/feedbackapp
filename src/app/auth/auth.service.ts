import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
auth:boolean=false;
token:any
userId:any;
emailSubject=new BehaviorSubject<any>(null)
user:any=343434|43434|34344;
isLoadingSubject=new BehaviorSubject<boolean>(false)
authListener=new BehaviorSubject<boolean>(false);
userSubject=new BehaviorSubject<any>(null)
errorSubject=new Subject<any>()
error:any;
signupsubject=new Subject<any>()
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
      this.signupsubject.next(true);
      this.isLoadingSubject.next(false)
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
   this.emailSubject.next(email)
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
this.auth=false
this.authListener.next(false);

this.userSubject.next(null)

}
}
