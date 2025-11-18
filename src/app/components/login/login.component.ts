import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginRequest } from './auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  loading = false;

  // toast
  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  // inline success indicator
  showVerifiedIndicator = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false]
    });
  }

  /**
   * After view init we try to detect if native inputs were autofilled by the browser.
   * Autofill often doesn't dispatch input events, leaving FormControls empty.
   * We read the native input values and push them into the reactive form if needed.
   */
  ngAfterViewInit(): void {
    // small delay to allow browser autofill to populate fields
    setTimeout(() => {
      this.syncNativeInputsToForm();
    }, 250);

    // also listen for focus events which sometimes triggers autofill later
    const emailEl = this.elRef.nativeElement.querySelector('#loginEmail') as HTMLInputElement | null;
    const pwdEl = this.elRef.nativeElement.querySelector('#loginPassword') as HTMLInputElement | null;

    if (emailEl) {
      this.renderer.listen(emailEl, 'focus', () => {
        setTimeout(() => this.syncNativeInputsToForm(), 100);
      });
    }
    if (pwdEl) {
      this.renderer.listen(pwdEl, 'focus', () => {
        setTimeout(() => this.syncNativeInputsToForm(), 100);
      });
    }
  }

  /** Copies native input values into Angular form controls if they are non-empty. */
  private syncNativeInputsToForm() {
    try {
      const emailEl = this.elRef.nativeElement.querySelector('#loginEmail') as HTMLInputElement | null;
      const pwdEl = this.elRef.nativeElement.querySelector('#loginPassword') as HTMLInputElement | null;

      if (emailEl) {
        const nativeEmail = (emailEl.value || '').toString().trim();
        const ctrlEmail = this.loginForm.get('email');
        if (nativeEmail && ctrlEmail && !ctrlEmail.value) {
          ctrlEmail.setValue(nativeEmail);
          ctrlEmail.markAsDirty();
          ctrlEmail.markAsTouched();
        }
      }

      if (pwdEl) {
        const nativePwd = (pwdEl.value || '').toString().trim();
        const ctrlPwd = this.loginForm.get('password');
        if (nativePwd && ctrlPwd && !ctrlPwd.value) {
          ctrlPwd.setValue(nativePwd);
          ctrlPwd.markAsDirty();
          ctrlPwd.markAsTouched();
        }
      }

      // debug logs (remove in production)
      // console.log('AFTER SYNC: form value', this.loginForm.value, 'valid:', this.loginForm.valid);
    } catch (e) {
      // ignore sync errors silently
      // console.error('syncNativeInputsToForm error', e);
    }
  }

  get f() { return this.loginForm.controls; }

  submit() {
    // Always sync native inputs right before submit as a last-ditch fix
    this.syncNativeInputsToForm();

    // debug logging to help you see real-time values (remove if not wanted)
    // console.log('Submitting loginForm', this.loginForm.value, 'valid:', this.loginForm.valid);

    if (this.loginForm.invalid) {
      // give a more specific message if password too short
      if (this.f['password'].value && this.f['password'].value.length < 6) {
        this.showToast('Password must be at least 6 characters.', 'error');
      } else {
        this.showToast('Please fill required fields correctly', 'error');
      }
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.showVerifiedIndicator = false;

    const payload: LoginRequest = {
      email: (this.f['email'].value || '').toString().trim(),
      password: (this.f['password'].value || '').toString()
    };

    this.auth.login(payload)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res) => {
          const ok = !!res && (res.success === true || !!res.token);
          if (ok) {
            this.showToast('User verified', 'success');
            this.showVerifiedIndicator = true;
            setTimeout(() => this.showVerifiedIndicator = false, 3500);
            this.f['password'].reset();
            // TODO: store token & redirect
          } else {
            const msg = res && res.message ? res.message : 'Login failed';
            this.showToast(msg, 'error');
          }
        },
        error: (err) => {
          const serverMsg = err?.error?.message || err?.message || 'Server error, please try again';
          this.showToast(serverMsg, 'error');
        }
      });
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 3500);
  }
}
