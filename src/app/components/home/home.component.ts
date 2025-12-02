// src/app/home/home.component.ts
import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  signinForm: FormGroup;
  loading = false;

  // toast state
  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private router: Router     // <- injected Router
  ) {
    // validator is a plain function (no this usage) so can be passed directly
    this.signinForm = this.fb.group({
      identifier: ['', [this.requiredValidator, this.emailOrPhoneValidator]]
    });
  }

  ngAfterViewInit(): void {
    this.attachGetStartedListeners();
    this.initScrollAnimations();
    // Wire all "Get started" buttons / links that match visible text "Get started"
    const els = Array.from(document.querySelectorAll('button, a')) as HTMLElement[];
    els.forEach(el => {
      const text = (el.innerText || el.textContent || '').trim().toLowerCase();
      if (text === 'get started' || text === 'getstarted') {
        // attach listener
        this.renderer.listen(el, 'click', (ev) => {
          ev.preventDefault();
          this.goToContact();
        });
      }
    });
  }

 
  goToContact() {
    // Use router so user stays in SPA
    this.router.navigate(['/contact-us']);
  }

  requiredValidator(control: AbstractControl): ValidationErrors | null {
    const v = (control.value || '').toString().trim();
    return v ? null : { required: true };
  }

  emailOrPhoneValidator(control: AbstractControl): ValidationErrors | null {
    const v = (control.value || '').toString().trim();
    if (!v) return { required: true };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (emailRegex.test(v)) return null;

    const digits = v.replace(/[^0-9]/g, '');
    if (digits.length >= 7 && digits.length <= 15) return null;

    return { invalidIdentifier: true };
  }

  get identifier(): AbstractControl { return this.signinForm.get('identifier')!; }

  onSubmit() {
    if (this.signinForm.invalid) {
      this.identifier.markAsTouched();
      this.showToast('Enter a valid email (example@domain.com) or phone number (7–15 digits).', 'error');
      return;
    }

    this.loading = true;

    // Simulate server call: show loader 5s, then success toast
    setTimeout(() => {
      this.loading = false;
      this.showToast('Successfully subscribed — check mail.', 'success');
      this.signinForm.reset();
    }, 5000);
  }


  /** All "Get started" buttons go to Contact page */
  private attachGetStartedListeners() {
    const els = Array.from(document.querySelectorAll('button, a')) as HTMLElement[];
    els.forEach(el => {
      const text = (el.innerText || el.textContent || '').trim().toLowerCase();
      if (text === 'get started' || text === 'getstarted') {
        this.renderer.listen(el, 'click', (ev) => {
          ev.preventDefault();
          this.goToContact();
        });
      }
    });
  }
  private initScrollAnimations() {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    );

    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach(el => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('reveal-visible');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;

    setTimeout(() => this.toastVisible = false, 4000);
  }
}
