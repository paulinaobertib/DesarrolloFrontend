import { FormEvent, useMemo, useRef, useState } from 'react';

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<keyof ContactValues, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const errors = useMemo(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      name:
        values.name.trim().length === 0
          ? 'Debe tener entre 3 y 60 letras.'
          : values.name.trim().length < 3 || values.name.trim().length > 60
            ? 'Debe tener entre 3 y 60 letras.'
            : null,
      email:
        values.email.trim().length === 0
          ? 'Email inválido.'
          : emailPattern.test(values.email)
            ? null
            : 'Email inválido.',
      subject: values.subject ? null : 'Seleccioná un motivo.',
      message:
        values.message.trim().length === 0
          ? 'Mínimo 10 caracteres.'
          : values.message.trim().length < 10
            ? 'Mínimo 10 caracteres.'
            : null,
    } as const;
  }, [values]);

  const fieldInvalid = (field: keyof ContactValues) =>
    (submitted || touched[field]) && !!errors[field];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) return;

    setSent(true);
    resetForm();
  };

  const resetForm = () => {
    setSubmitted(false);
    setValues(initialValues);
    setTouched({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    queueMicrotask(() => {
      nameRef.current?.focus();
    });
  };

  return (
    <section className="contactForm" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto">Formulario de contacto</h2>

      {sent && <p className="success" role="status">¡Gracias! Tu mensaje fue enviado.</p>}

      <form noValidate onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            value={values.name}
            onChange={({ target }) => {
              setValues((prev) => ({ ...prev, name: target.value }));
              setSent(false);
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            className={fieldInvalid('name') ? 'is-invalid' : undefined}
            aria-invalid={fieldInvalid('name') || undefined}
            aria-describedby={fieldInvalid('name') ? 'err-name' : undefined}
          />
          {fieldInvalid('name') && (
            <div id="err-name" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                ⚠️
              </span>
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            value={values.email}
            onChange={({ target }) => {
              setValues((prev) => ({ ...prev, email: target.value }));
              setSent(false);
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className={fieldInvalid('email') ? 'is-invalid' : undefined}
            aria-invalid={fieldInvalid('email') || undefined}
            aria-describedby={fieldInvalid('email') ? 'err-email' : undefined}
          />
          {fieldInvalid('email') && (
            <div id="err-email" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                ⚠️
              </span>
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="subject">Motivo</label>
          <select
            id="subject"
            name="subject"
            value={values.subject}
            onChange={({ target }) => {
              setValues((prev) => ({ ...prev, subject: target.value }));
              setSent(false);
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, subject: true }))}
            className={fieldInvalid('subject') ? 'is-invalid' : undefined}
            aria-invalid={fieldInvalid('subject') || undefined}
            aria-describedby={fieldInvalid('subject') ? 'err-subject' : undefined}
          >
            <option value="" disabled>
              -- Selecciona un motivo --
            </option>
            <option value="consulta">Consulta</option>
            <option value="soporte">Soporte</option>
            <option value="presupuesto">Presupuesto</option>
          </select>
          {fieldInvalid('subject') && (
            <div id="err-subject" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                ⚠️
              </span>
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            value={values.message}
            onChange={({ target }) => {
              setValues((prev) => ({ ...prev, message: target.value }));
              setSent(false);
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
            className={fieldInvalid('message') ? 'is-invalid' : undefined}
            aria-invalid={fieldInvalid('message') || undefined}
            aria-describedby={fieldInvalid('message') ? 'err-message' : undefined}
          />
          {fieldInvalid('message') && (
            <div id="err-message" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                ⚠️
              </span>
              <span>{errors.message}</span>
            </div>
          )}
        </div>

        <button type="submit" disabled={Object.values(errors).some(Boolean)}>
          Enviar
        </button>
      </form>
    </section>
  );
}
