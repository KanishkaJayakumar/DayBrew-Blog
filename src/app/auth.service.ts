
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  registerUser(email: string, password: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  }

  loginUser(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    this.isAuthenticated = !!user;
    return this.isAuthenticated;
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
