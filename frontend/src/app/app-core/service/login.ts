import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDTO} from '../dto/login-dto';
import {Observable} from 'rxjs';
import {LoginResponseDTO} from '../dto/login-response-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private apiUrl = "http://localhost:8080/auth";

  constructor(private http: HttpClient) {
  }


  login(dados: LoginDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(
      `${this.apiUrl}/login`,
      dados
    );
  }
}
