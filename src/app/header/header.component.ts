import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
userStatus=false
auth:boolean=true;
unsub:Subscription;
admin='61cb38c9e0a7bf2dc6129b4c'
adminStatus:boolean=false
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.unsub = this.authService.authListener.subscribe((res) => {
      console.log('ngt',res);
      if (!res) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/empFeedback']);
      }
      this.userStatus = res;
    });

 this.unsub=this.authService.userSubject.subscribe(data=>{
if (data==this.admin){
this.adminStatus=true;
}else
this.adminStatus=false;

 })
  }
ngOnDestroy(): void {
    this.unsub.unsubscribe()
}
onLogout(){
  this.authService.logout()
}
}
