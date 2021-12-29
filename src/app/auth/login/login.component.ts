import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy {
unsub:Subscription

error:any;
isLoading=false;
userStatus:boolean=false;
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.unsub=this.auth.errorSubject.subscribe(data=>{
      console.log(data)
         this.error=data
       })




  }
  onLogin(form:NgForm){
    this.auth.login(form.value.email,form.value.password)
   this.router.navigate(['/empFeedback'])
  }
ngOnDestroy(): void {
    this.unsub.unsubscribe()

}
  }
