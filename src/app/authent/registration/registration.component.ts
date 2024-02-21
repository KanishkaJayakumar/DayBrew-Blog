// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log('onSubmit called');

    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      // Get existing users from local storage or initialize as an empty array
      const existingUsersString = localStorage.getItem('users');
      console.log('Existing Users:', existingUsersString);

      const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];
      
      // Store user credentials in local storage
      existingUsers.push({ email, password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      console.log('User details stored in local storage.');

      // Check if users are stored correctly
      const updatedUsersString = localStorage.getItem('users');
      console.log('Updated Users:', updatedUsersString);
    } else {
      console.log('Form is not valid. Cannot submit.');
    }
  }
}
