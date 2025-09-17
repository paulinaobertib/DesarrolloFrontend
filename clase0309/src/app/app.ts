import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormContactServiceTs } from './services/form-contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly auth = inject(FormContactServiceTs);
  private router = inject(Router);
  
  onToggleAuth() {
    if (this.auth.isLoggedIn()) {
      this.auth.logout();
      this.router.navigate(['/'], { replaceUrl: true });
    } else {
      this.auth.login();
    }
  }
}
