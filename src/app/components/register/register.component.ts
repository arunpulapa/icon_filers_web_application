import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private apiBaseUrl = 'https://localhost:7255/api';

  isSubmitting = false;
  serverError: string | null = null;
  serverSuccess: string | null = null;

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
    // Reset form state + values
    form.resetForm({
      acceptTerms: false
    });

    // Reset model object (keeps binding clean)
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
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    const payload: RegisterRequest = {
      firstName: this.model.firstName.trim(),
      lastName: this.model.lastName.trim(),
      email: this.model.email.trim(),
      password: this.model.password,
      phoneNumber: this.model.phoneNumber.trim(),
      alternatePhoneNumber: this.model.alternatePhoneNumber?.trim() || undefined
    };

    this.isSubmitting = true;
    this.serverError = null;
    this.serverSuccess = null;

    this.http.post(`${this.apiBaseUrl}/Clients/signup`, payload).subscribe({
      next: () => {
        this.isSubmitting = false;

        // ✅ success toast
        this.serverSuccess = 'Account created successfully.';
        setTimeout(() => (this.serverSuccess = null), 4000);

        // ✅ clear form + model
        this.resetFormAndModel(form);

        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => {
        this.isSubmitting = false;

        // ❌ error toast
        // this.serverError =
        //   err?.error?.message || 'Something went wrong. Please try again.';
        // setTimeout(() => (this.serverError = null), 5000);

        // ✅ also clear form + model on error (as you requested)
        this.resetFormAndModel(form);
      }
    });
  }
}
