import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'empFeedback', component: FeedbackComponent,canActivate:[AuthGuard]},
  {path: 'feedbackList', component: FeedbacklistComponent,canActivate:[AuthGuard]},
  {path: "",redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
