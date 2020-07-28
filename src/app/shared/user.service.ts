import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  apiUrl:any='http://localhost/restfullapi/index.php/api/';

  status()
  {
      return this.http.get(this.apiUrl+'status');
  }


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

}
