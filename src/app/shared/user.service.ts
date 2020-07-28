import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firebase : AngularFireDatabase) { }

  userList : AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    nama_depan: new FormControl('', Validators.required),
    nama_belakang: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  initializeFormGroup(){
    this.form.setValue({
      $key : null,
      nama_depan: '',
      nama_belakang: '',
      username: '',
      email: '',
      password: ''
    });
  }

  getUser(){
    this.userList = this.firebase.list('user');
    return this.userList.snapshotChanges();
  }
  
  insertUser(user){
    this.userList.push({
      nama_depan : user.nama_depan,
      nama_belakang : user.nama_belakang,
      username : user.username,
      email : user.email,
      password : user.password

    });
  }

  updateUser(user){
    this.userList.update(user.$key,
      {
      nama_depan : user.nama_depan,
      nama_belakang : user.nama_belakang,
      username : user.username,
      email : user.email,
      password : user.password
      });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
