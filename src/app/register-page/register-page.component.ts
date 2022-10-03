import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
  public isAfrican = false;
  classes: Array<any> = [
    { name: 'Licence 1', value: 'Licence1', mandatory: true },
    { name: 'Licence 2', value: 'Licence2', mandatory: true },
    { name: 'Licence 3', value: 'Licence3', mandatory: true },
    { name: 'Master 1', value: 'Master1', mandatory: false },
    { name: 'Master 2', value: 'Master2', mandatory: false }
  ];
  ngOnInit() {
    localStorage.clear();
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      )]),
      country: new FormControl('', Validators.required),
      african: new FormControl(''),
      selectedClasses:  new FormArray([])
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
      this.router.navigate(['/']);
    }
    else{
      this.submitted = true;
    }
  }
  onChange(value) {
    console.log(value);
    if(value === 'Afrique'){
      this.isAfrican = true;
    }
  }
  onCheckboxChange(event: any) {
    
    const selectedClasses = (this.registerForm.controls['selectedClasses'] as FormArray);
    if (event.target.checked) {
      selectedClasses.push(new FormControl(event.target.value));
    } else {
      const index = selectedClasses.controls
      .findIndex(x => x.value === event.target.value);
      selectedClasses.removeAt(index);
    }
  }
}
