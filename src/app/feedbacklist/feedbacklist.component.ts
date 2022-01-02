import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit,OnDestroy {
isLoading=false;
  feedbackList: any=[];
  displayedColumns: string[] = ['action','StudentId','StudentName','Phone','sem','division','BRANCH','ProfName','ProfSubject','ProfReview','courseName','courseReview','ratings'];
  dataSource: any;
  loggedUser: string|null;
  editMode: boolean;

  subscription: Subscription;
  editedItemIndex: number;
  editForm: FormGroup;
s:Subscription
  constructor(private service :EmployeeServiceService) { }

  ngOnInit(): void {
    this.isLoading=true
    // this.loggedUser = sessionStorage.getItem('loggedUser');

//     this.editForm = new FormGroup({
//       comments: new FormControl('',Validators.required)
// })
   this.s = this.service.listFeedback().subscribe(data=>{
     this.feedbackList=data
     this.feedbackList = new MatTableDataSource(this.feedbackList);
     const ELEMENT_DATA: any[] = this.feedbackList ;
     console.log(this.feedbackList)
     console.log(ELEMENT_DATA);
     this.dataSource = ELEMENT_DATA;
     this.isLoading=false
    });

  //  this.feedbackList = new MatTableDataSource(this.feedbackList);
  //  const ELEMENT_DATA: any[] = this.feedbackList ;
  //  console.log(this.feedbackList)
  //  console.log(ELEMENT_DATA);
  //  this.dataSource = ELEMENT_DATA;

  //  this.subscription = this.service.startedEditing
  //     .subscribe(
  //       (index: number) => {
  //         this.editedItemIndex = index;
  //         this.editMode = true;
  //        this.editListData = Object.assign({},this.feedbackList[index]);
  //         this.editListData={
  //           project: this.editListData.project,
  //           ratings: this.editListData.ratings,
  //           comments: this.editListData.comments
  //         }
  //       }
  //     );

  }
  // editData(index: number){
  //   this.service.startedEditing.next(index);
  // }
  // updateList(obj: {}){

  //   // this.feedbackList[this.editedItemIndex] = Object.assign({}, obj);
  //    //const ELEMENT_DATA: FeedbackList[] = this.feedbackList ;
  //    this.dataSource[this.editedItemIndex] = Object.assign({}, obj);
  //    this.dataSource = [...this.dataSource];
  //    this.editMode = false;
  //  }
  onDelete(data:any) {

   console.log(data)


   this.s= this.service.deleteFeedback(data).subscribe(data=>{
      this.isLoading=true;
     this.s= this.service.listFeedback().subscribe(data=>{
        this.feedbackList=data
        this.feedbackList = new MatTableDataSource(this.feedbackList);
        const ELEMENT_DATA: any[] = this.feedbackList ;
        console.log(this.feedbackList)
        console.log(ELEMENT_DATA);
        this.dataSource = ELEMENT_DATA;
        this.isLoading=false
      })
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  check(i:any){
    console.log(i)
  }
ngOnDestroy(): void {
    this.s.unsubscribe();
}
}
