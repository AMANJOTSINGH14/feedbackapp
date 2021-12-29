import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl , Validators, MaxLengthValidator, FormControlName } from '@angular/forms';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
sub:Subscription;
error:any
loggedUser: string|null;
form: FormGroup;
rating:number = 1;
list: any;
isLoading:boolean
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;

  constructor(private service :EmployeeServiceService,
    private router: Router,private auth:AuthService,private Dialog:MatDialog) { }

  ngOnInit(): void {
this.isLoading=true
    this.auth.isLoadingSubject.subscribe(data=>{
      this.isLoading=false
    })
    this.auth.emailSubject.subscribe(data=>{
      this.loggedUser=data
    })
    this.form = new FormGroup({
      StudentName:new FormControl(null,Validators.required),
      StudentId:new FormControl(null,Validators.required),

      sem:new FormControl(null,Validators.required),
      ProfName:new FormControl(null,Validators.required),
      courseName:new FormControl(null,Validators.required),
      BRANCH:new FormControl(null,Validators.required),
      division:new FormControl(null,Validators.required),
      // project:new FormControl(null,[Validators.required,Validators.maxLength(250),Validators.minLength(0)]),
      ProfSub:new FormControl(null,Validators.required),
      ProfReview:new FormControl(null,[Validators.required,Validators.maxLength(250),Validators.minLength(0)]),
      courseReview:new FormControl(null,[Validators.required,Validators.maxLength(250),Validators.minLength(0)]),
      ratings: new FormControl(null, null),
      Phone:new FormControl(null,Validators.required)
      // comments: new FormControl(null,Validators.required)
})
  }
  onRatingChanged(rating:any){
    this.rating = rating;
  }
  onSubmitFeedBack(data:any){
    console.log(data);
    data.value.ratings = this.rating;
    this.service.addFeedback(data.value).subscribe(data=>{
      console.log(data)
        // this.router.navigate(['/feedbackList']);
        this.form.reset();
        const config=new MatDialogConfig();
config.width="60%"
        this.Dialog.open(EntryComponent,config)
    },error=>{
      if(error){
        this.error=error.error.message
      }
      console.log(error)

    });
    // this.router.navigate(['/feedbackList']);
  }
  onCancel() {
    this.form.reset();
  }
}

