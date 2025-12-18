import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginRequest } from './auth.service';
import { finalize } from 'rxjs/operators';

// 🔥 INTERNAL DASHBOARD BASE URL
const INTERNAL_BASE_URL = 'https://app-iconfilers.netlify.app/';
// or use your real internal server domain (I can set it for you)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  loading = false;

  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  showVerifiedIndicator = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false]
    });

    
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.syncNativeInputsToForm(), 250);
  }

  private syncNativeInputsToForm() {
    try {
      const emailEl = this.elRef.nativeElement.querySelector('#loginEmail') as HTMLInputElement | null;
      const pwdEl = this.elRef.nativeElement.querySelector('#loginPassword') as HTMLInputElement | null;

      if (emailEl) {
        const nativeEmail = (emailEl.value || '').toString().trim();
        const ctrl = this.loginForm.get('email');
        if (nativeEmail && ctrl && !ctrl.value) ctrl.setValue(nativeEmail);
      }

      if (pwdEl) {
        const nativePwd = (pwdEl.value || '').toString().trim();
        const ctrl = this.loginForm.get('password');
        if (nativePwd && ctrl && !ctrl.value) ctrl.setValue(nativePwd);
      }

    } catch (e) { }
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.syncNativeInputsToForm();

    if (this.loginForm.invalid) {
      this.showToast('Please fill required fields correctly', 'error');
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
          if (!ok) {
            this.showToast("login failed", 'error');
            return;
          }

          // Extract role (same as internal dashboard)
          const backendRole = (res.user?.role || '').trim().toLowerCase();

          let rolePath = 'client/dashboard';

          if (backendRole === 'admin') {
            rolePath = 'admin/dashboard';
          } else if (backendRole === 'user') {
            rolePath = 'teams/dashboard';   // ✅ MUST MATCH INTERNAL
          }


          this.showToast('User verified', 'success');
          this.showVerifiedIndicator = true;
 const userEncoded = encodeURIComponent(
    JSON.stringify(res.user)
  );

          // 🔥 Redirect to INTERNAL DASHBOARD by role
          window.location.href =
            `${INTERNAL_BASE_URL}/${rolePath}?token=${res.token}&user=${userEncoded}`;

        },
        error: () => {
          this.showToast("login failed", 'error');
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