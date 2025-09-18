import { Injectable, signal, computed} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {
  
  private loggedIn = signal(false); // estado de login en memoria

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
  public isLogged = computed(() => this.loggedIn());

}
