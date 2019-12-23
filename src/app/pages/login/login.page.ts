import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(res => {
      console.log(res);
      this.errorMessage = '';
      this.router.navigateByUrl('/');
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin().then(res => {
      this.router.navigateByUrl('/');
    }, err => {
      this.errorMessage = err.message;
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      this.router.navigateByUrl('/');
    }, err => {
      this.errorMessage = err.message;
    });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin().then(res => {
      this.router.navigateByUrl('/');
    }, err => {
      this.errorMessage = err.message;
    });
  }

}
