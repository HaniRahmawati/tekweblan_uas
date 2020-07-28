import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserssComponent } from '../userss/userss.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public api:UserService) 
    {
      this.getData();
     }
     getData()
	{
		this.api.status().subscribe(res=>{
			console.log(res);
		})
	}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nama_depan', 'nama_belakang', 'username','email','password','actions'];

  ngOnInit(): void {
  }

  onCreate(){
    this.api.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(UserssComponent,dialogConfig);
  }

}
