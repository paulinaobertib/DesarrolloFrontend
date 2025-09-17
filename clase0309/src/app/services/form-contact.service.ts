import { computed, Injectable, signal } from '@angular/core';

// A service is injectable by nature
// because of the @Injectable decorator
// provided in root means that this service
// is a singleton and can be injected anywhere
@Injectable({
  providedIn: 'root'
})
export class FormContactServiceTs {

  // Using Angular Signals to manage login state
  private loggedIn = signal(false);

  // Computed property to expose login state
  public isLoggedIn = computed(() => this.loggedIn());

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
}