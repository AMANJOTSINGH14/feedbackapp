import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private Ref:MatDialogRef<EntryComponent>, private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
onLogout(){
this.auth.logout()
this.Ref.close()
}
onCancel(){
this.Ref.close()
}
}
