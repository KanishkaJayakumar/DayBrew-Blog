import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
registerForm: any;

  
  constructor(private authService: AuthService) {}

  onSubmit(formValue: any) {
    const { email, password } = formValue;
    
    const isAuthenticated = this.authService.loginUser(email, password);

    if (isAuthenticated) { 
      // Optionally, you can redirect to a protected page or handle success in another way
      console.log('Login successful');
    } else {
      console.log('Invalid credentials');
    }
  }

}
