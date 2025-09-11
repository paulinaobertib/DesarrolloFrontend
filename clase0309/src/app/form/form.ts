import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form {
  private fb = inject(FormBuilder);

  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;

  submitted = false;
  sent = false;

  readonly initial = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  form = this.fb.group({
    name: this.fb.control(this.initial.name, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    email: this.fb.control(this.initial.email, [Validators.required, Validators.email]),
    subject: this.fb.control(this.initial.subject, [Validators.required]),
    message: this.fb.control(this.initial.message, [Validators.required, Validators.minLength(10)]),
  });

  fieldInvalid(name: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[name];
    return !!(c && (c.touched || this.submitted) && c.invalid);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    // 1) aquí iría tu envío (HTTP/email)
    // 2) mostrar banner de éxito
    this.sent = true;

    // 3) resetear todo a blanco y volver arriba
    this.resetForm();
  }

  private resetForm() {
    this.submitted = false;
    this.form.reset(this.initial);
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    queueMicrotask(() => this.nameInput?.nativeElement.focus());
  }
}
