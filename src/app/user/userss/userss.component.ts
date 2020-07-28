import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.css']
})
export class UserssComponent implements OnInit {

  
  constructor(public service: UserService,
    public dialogRef: MatDialogRef<UserssComponent>) { }

  ngOnInit() {
    this.service.getUser();
  }

  onSubmit(){
    if (this.service.form.valid){
      this.service.insertUser(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
