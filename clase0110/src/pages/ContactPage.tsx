import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const defaultValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted, touchedFields, isValid },
  } = useForm<ContactValues>({
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      setSent(true);
      reset(defaultValues);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      queueMicrotask(() => setFocus('name'));
    }
  }, [isSubmitSuccessful, reset, setFocus]);

  const onSubmit = handleSubmit(async (values: ContactValues) => {
    console.debug('[Contact] submit', values);
    await new Promise((resolve) => setTimeout(resolve, 400));
  });

  const showError = (field: keyof ContactValues) =>
    Boolean(errors[field]) && (isSubmitted || touchedFields[field]);

  return (
    <section className="contactForm" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto">Formulario de contacto</h2>

      {sent && (
        <p className="success" role="status">
          Gracias! Tu mensaje fue enviado.
        </p>
      )}

      <form noValidate onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            {...register('name', {
              required: 'Debe tener entre 3 y 60 letras.',
              minLength: { value: 3, message: 'Debe tener entre 3 y 60 letras.' },
              maxLength: { value: 60, message: 'Debe tener entre 3 y 60 letras.' },
              onChange: () => setSent(false),
            })}
            className={showError('name') ? 'is-invalid' : undefined}
            aria-invalid={showError('name') || undefined}
            aria-describedby={showError('name') ? 'err-name' : undefined}
          />
          {showError('name') && (
            <div id="err-name" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                !
              </span>
              <span>{errors.name?.message}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            {...register('email', {
              required: 'Email invalido.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email invalido.',
              },
              onChange: () => setSent(false),
            })}
            className={showError('email') ? 'is-invalid' : undefined}
            aria-invalid={showError('email') || undefined}
            aria-describedby={showError('email') ? 'err-email' : undefined}
          />
          {showError('email') && (
            <div id="err-email" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                !
              </span>
              <span>{errors.email?.message}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="subject">Motivo</label>
          <select
            id="subject"
            {...register('subject', {
              required: 'Selecciona un motivo.',
              onChange: () => setSent(false),
            })}
            className={showError('subject') ? 'is-invalid' : undefined}
            aria-invalid={showError('subject') || undefined}
            aria-describedby={showError('subject') ? 'err-subject' : undefined}
          >
            <option value="" disabled>
              -- Selecciona un motivo --
            </option>
            <option value="consulta">Consulta</option>
            <option value="soporte">Soporte</option>
            <option value="presupuesto">Presupuesto</option>
          </select>
          {showError('subject') && (
            <div id="err-subject" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                !
              </span>
              <span>{errors.subject?.message}</span>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Escribe tu mensaje..."
            {...register('message', {
              required: 'Minimo 10 caracteres.',
              minLength: { value: 10, message: 'Minimo 10 caracteres.' },
              onChange: () => setSent(false),
            })}
            className={showError('message') ? 'is-invalid' : undefined}
            aria-invalid={showError('message') || undefined}
            aria-describedby={showError('message') ? 'err-message' : undefined}
          />
          {showError('message') && (
            <div id="err-message" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">
                !
              </span>
              <span>{errors.message?.message}</span>
            </div>
          )}
        </div>

        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  );
}
