import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.errorMsg = '';
    this.auth
      .register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  }
}