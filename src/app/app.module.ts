import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RetrivenamePipe } from './retrivename.pipe';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InterceptorInterceptor } from './auth/interceptor.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import { EntryComponent } from './entry/entry.component';
import { DevelopedComponent } from './developed/developed.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    FeedbackComponent,
    HeaderComponent,
    RetrivenamePipe,
    FeedbacklistComponent,
    StarRatingComponent,
    EntryComponent,
    DevelopedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule,
MatInputModule,
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatProgressSpinnerModule,
MatTableModule,
MatTooltipModule,
MatIconModule,
MatSnackBarModule,
MatSelectModule,
NgxMaskModule.forRoot(),
HttpClientModule,
MatProgressSpinnerModule,
MatDialogModule,
MatDividerModule,
MatProgressBarModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[EntryComponent]
})
export class AppModule { }
