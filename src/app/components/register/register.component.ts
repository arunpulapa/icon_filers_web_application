import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // 👇 Point directly to /api/Auth
  private apiBaseUrl = 'https://iconfilers.club/IconFilers/api/Auth';

  isSubmitting = false;
  serverError: string | null = null;
  serverSuccess: string | null = null;

  // UI model (can still keep phoneNumber / alternatePhoneNumber here)
  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    acceptTerms: false
  };

  constructor(private http: HttpClient) {}

  private resetFormAndModel(form: NgForm) {
    form.resetForm({
      acceptTerms: false
    });

    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      alternatePhoneNumber: '',
      acceptTerms: false
    };
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.model.acceptTerms) {
      form.form.markAllAsTouched();
      return;
    }

    // 👇 Match Swagger: { firstName, lastName, email, password, phone, role }
    const payload: RegisterRequest = {
      firstName: this.model.firstName.trim(),
      lastName: this.model.lastName.trim(),
      email: this.model.email.trim(),
      password: this.model.password,
      phone: this.model.phoneNumber.trim(),
      role: 'User' // or 'Admin' / whatever your backend expects
    };

    this.isSubmitting = true;
    this.serverError = null;
    this.serverSuccess = null;

    // 👇 Correct endpoint: POST /api/Auth/register
    this.http.post(`${this.apiBaseUrl}/register`, payload).subscribe({
      next: () => {
        this.isSubmitting = false;

        this.serverSuccess = 'Account created successfully.';
        setTimeout(() => (this.serverSuccess = null), 4000);

        this.resetFormAndModel(form);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => {
        this.isSubmitting = false;

        this.serverError =
          err?.error?.message || 'Something went wrong. Please try again.';
        setTimeout(() => (this.serverError = null), 5000);

        // if you don't want to clear form on error, remove next line
        // this.resetFormAndModel(form);
      }
    });
  }
}
