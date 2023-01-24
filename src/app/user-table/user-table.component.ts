import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  users: any;
  constructor(private usersData: UsersDataService) {
    usersData.user().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    console.log('usertable module loaded');
    console.log(usersData);
  }

  ngOnInit(): void {}
}
