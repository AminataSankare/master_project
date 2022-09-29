import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitted = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    localStorage.clear();
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.authenticationService.login(
      this.loginForm.get('username')!.value,
      this.loginForm!.get('password')!.value
    );
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == "doesnt_exist") {
      this.submitted = true;
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
