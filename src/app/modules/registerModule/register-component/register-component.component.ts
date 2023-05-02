import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {ErrorServiceService} from '../../error/error/error-service.service'

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
    private errorService: ErrorServiceService

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
        this.errorService.errors('Passwords are not matching');
        return { 'noMatch': true } 
      }
      this.errorService.errors('');
      return null
 
    }
  }

  submitForm(form: FormGroup) {
    this.submitted = true;
    

    // Stop the form here, if form is invalid
    if(form.invalid) {
      return;
    }

    console.log(form);
  }

}
