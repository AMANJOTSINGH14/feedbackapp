import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
auth:boolean=false;
subs:Subscription;
error:any;
isLoading=false;
  constructor(private route:ActivatedRoute,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.subs=this.authService.errorSubject.subscribe(data=>{
      console.log(data)
         this.error=data
       })
    this.subs= this.authService.authListener.subscribe((res)=>{
      console.log('inside signup nginoinit',this.auth)

      this.auth=res
      //  if(!this.auth){
      //    this.router.navigate(['/signup'])
      //    console.log('inside signup nginoinit a')
      //  }
       if(!this.auth){
        this.router.navigate(["/signup"])
         console.log('inside signup nginoinitbbbv')
       }
     })
  }
  onSignup(form:NgForm){
    this.authService.createUser(form.value.email,form.value.password)

this.authService.signupsubject.subscribe(()=>{
this.router.navigate(['/login'])
})

 this.subs=this.authService.errorSubject.subscribe(data=>{
   this.error=data
 })

  }
ngOnDestroy(): void {
    this.subs.unsubscribe()
}
  }
