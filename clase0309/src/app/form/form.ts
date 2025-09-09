import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  private fb = inject(FormBuilder); 
  submitted = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/[A-Za-zÀ-ÿ\s]+/)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
  });

  onSubmit() { }

  fieldInvalid(name: string) {
    const c = this.form.get(name);
    return !!c && (c.invalid && (c.touched || this.submitted()));
  }
}
