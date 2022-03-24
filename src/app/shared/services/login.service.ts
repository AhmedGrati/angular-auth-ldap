import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginDTO } from '../models/login.dto';
import { LoginResponse } from '../models/login.response';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BACKEND_BASE_URL = "localhost:8081";

  constructor(private httpClient: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<LoginResponse> {
    const { username, password } = loginDTO;
    return this.httpClient.get<LoginResponse>(`http://${username}:${password}@${this.BACKEND_BASE_URL}`);
  }

}
