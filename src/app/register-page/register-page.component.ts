import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import countries from '../country.json';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public registerForm!: FormGroup;
  public countries:any = countries;
  public selected: string;
  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  public submitted = false;

  ngOnInit() {
    localStorage.clear();
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });
  }


  public onSubmit() {
    var check_user = this.authenticationService.register(
      this.registerForm.get('username')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm!.get('password')!.value
    );
    console.log(check_user);
    if (check_user == "created") {
      this.submitted = false;
      this.router.navigate(['/login']);
    }
    else{
      this.submitted = true;
    }
  }

}
