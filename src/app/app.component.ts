import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shareServiceData';

  users: any;
  constructor(private usersData: UsersDataService) {
    usersData.user().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    console.log(usersData);
  }
}
