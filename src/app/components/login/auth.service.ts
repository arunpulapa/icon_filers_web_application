import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: any;
  token?: string;
  message?: string;
  success?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private base = 'https://iconfilers.club/IconFilers/api/Auth';

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/login`, payload);
  }

  resetPassword(payload: { email: string; newPassword: string }): Observable<any> {
    return this.http.post<any>(
      `${this.base}/reset-password`,
      payload
    );
  }
}
