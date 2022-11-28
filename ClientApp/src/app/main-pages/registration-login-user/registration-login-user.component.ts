import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-login-user',
  templateUrl: './registration-login-user.component.html',
  styleUrls: ['./registration-login-user.component.css']
})
export class CreateUserComponent implements OnInit {
  //array for user signup
  signupUsers: any[] = [];

  //Objects for signup; username, email and password
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  //objects for login; username and password
  loginObj: any = {
    userName: '',
    password: ''
  }


  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  //storing data into the array
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };


  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert('You have logged in successfully');
    } else {
      alert('Wrong ');
    }
  }


}
