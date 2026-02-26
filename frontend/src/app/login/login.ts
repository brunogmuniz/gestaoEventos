import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../app-core/service/login';
import { LoginDTO } from '../app-core/dto/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const dados: LoginDTO = this.form.value;

    this.loginService.login(dados).subscribe({
      next: (response) => {
        const token = response.token;
        localStorage.setItem('token', token);

        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role;
        console.log(role);
        if (role === 'ADMIN') {
          this.router.navigate(['/home-admin']);
        }
        if (role === 'USER_LEADER') {
          this.router.navigate(['/home-leader']);
        }
        if (role === 'USER_COMMON') {
          this.router.navigate(['/home']);
        }

      },
      error: () => {
        alert('Usuário ou senha inválidos');
      }
    });
  }
}
