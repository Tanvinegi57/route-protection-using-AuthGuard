import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  API_URL = 'https://jsonplaceholder.typicode.com/users';

  // registerURL = 'https://api-lib.applifyapps.com/api/v1/user/signUp';
  registerURL = environment.registerAPI;
  LoginURL = environment.LoginURL;

  user() {
    return this.http.get(this.API_URL);
  }

  registerUser(data: any) {
    return this.http.post(this.registerURL, data);
  }

  login(data: any) {
    this.isLoggedIn.next(true);
    return this.http
      .post<any>(this.LoginURL, data, { observe: 'response' })
      .subscribe({
        next: (result) => {
          console.log(result.body.statusCode, 'result');
          console.log(result, 'RESULT');
          if (result.body.statusCode === 200) {
            this.isLoggedIn.next(true);
            localStorage.setItem('jwt', JSON.stringify(result.body));
            this.router.navigate(['register']);
            this.toastr.success('Logged In Successfully.', result.body.message);
            const token: any = localStorage.getItem('jwt');
            const accessToken: any = JSON.parse(token);
            console.log('--------888888-----', accessToken.data.accessToken);
            console.log('token', JSON.parse(token));
          }
        },
        error: (error) => {
          if (error.error.statusCode === 400) {
            this.toastr.error(error.error.message);
          }
        },
      });
  }

  reloadComponent() {
    console.log('reload component hit');
    if (localStorage.getItem('jwt')) {
      this.router.navigate(['register']);
      this.isLoggedIn.next(true);
    }
  }
}
