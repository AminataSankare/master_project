import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  private user = 'user';
  private session = "session";

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}
  
  public login(username: string, password: string) {
    var token = this.authenticationClient.login(username, password);
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.user, username);
      // this.router.navigate(['/admin']);
      return token;
  }

  public register(username: string, email: string, password: string) {
    var token = this.authenticationClient.register(username, email, password);
      localStorage.setItem(this.session, 'new_user');
      console.log(token);
      return token;
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.user);
    localStorage.removeItem(this.session);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    console.log(token);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}