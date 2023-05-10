import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {alertServiceService} from '../../error/alert/alert.service'
import { UserService } from '../../../services/user.service'
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private alertService: alertServiceService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    },
    {
      validator: this.matchPassword('password', 'confirmPassword')
    })
  }

  get controls() {
    return this.registerForm.controls;
  }

  matchPassword(firstControl: any, secondControl: any): ValidatorFn  {

    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(firstControl)?.value;
      const confirm = control.get(secondControl)?.value;

      if (password != confirm) { 
        this.alertService.errors('Passwords are not matching');
        return { 'noMatch': true } 
      }
      this.alertService.errors('');
      return null
 
    }
  }

  submitForm(form: FormGroup) {
    this.submitted = true;
    

    // Stop the form here, if form is invalid
    if(form.invalid) {
      return;
    }

    this.userService.register1(this.registerForm.value)
    .pipe(first())
    .subscribe(res => {
      this.alertService.success('Registration Successfull!');
      this.router.navigate(['/login']);
    },
    error => {
      console.log(error)
      this.alertService.errors(error.message);
    })
  }

}
