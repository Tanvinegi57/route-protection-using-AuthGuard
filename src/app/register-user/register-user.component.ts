import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  users: any;
  constructor(private usersData: UsersDataService) {
    usersData.user().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    console.log('register module loaded');
    console.log(usersData);
  }

  ngOnInit(): void {}

  getFormData(data: any) {
    console.log(data);
    this.usersData.registerUser(data).subscribe((result: any) => {
      console.log('result', result);
    });
  }
}
