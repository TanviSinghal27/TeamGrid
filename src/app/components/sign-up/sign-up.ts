import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [NgClass, ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-sign-up',
  styleUrl: './sign-up.css',
  templateUrl: './sign-up.html',
})
export class SignUp {
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignUp(): void {
    if (this.signupForm.valid) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', this.signupForm.value.email || '');
      this.router.navigate(['/dashboard']);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
