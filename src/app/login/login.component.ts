import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any;
  loginResult: any;
  constructor(
    private usersData: UsersDataService,
    private router: Router,
    private toastr: ToastrService
  ) {
    usersData.user().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    console.log('login module loaded..');
    console.log(usersData);
  }

  // getFormData(data: any) {
  //   console.log(data);
  //   this.usersData.login(data).subscribe({
  //     next: (res: any) => {
  //       console.log(res.body.data, 'data');
  //       localStorage.setItem('jwt', JSON.stringify(res.body.data));
  //       if (res.body.statusCode === 200) {
  //         this.router.navigate(['register']);
  //         this.toastr.success(res.body.message);
  //       }
  //     },
  //     error: (error) => {
  //       if (error.error.statusCode === 400) {
  //         this.toastr.error(error.error.message);
  //       }
  //     },
  //   });
  // }

  getFormData(data: any) {
    console.log(data);
    this.usersData.login(data);
  }

  userTable = () => {
    this.router.navigateByUrl('/userDetails');
  };
  ngOnInit(): void {
    this.usersData.reloadComponent();
  }
}
