import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {
  private loggedIn = signal(false);

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }

  isLogged() {
    return computed(() => this.loggedIn())();
  }
}
