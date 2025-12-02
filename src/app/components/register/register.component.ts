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
  // base API url
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
    next: (res) => {
      this.isSubmitting = false;
      this.serverSuccess = 'Account created successfully.';

      // 🔥 RESET FORM
      form.resetForm(); // resets validators + fields
      
      // 🔥 RESET MODEL
      this.model = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        acceptTerms: false
      };

      // OPTIONAL → After reset, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // OPTIONAL → Redirect user
      // this.router.navigate(['/login']);
    },
    error: (err) => {
      this.isSubmitting = false;
      console.error(err);
      this.serverError = err?.error?.message || 'Something went wrong. Please try again.';
    }
  });
}

}
