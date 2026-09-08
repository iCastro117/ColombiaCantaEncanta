import Icon from '../Icons.jsx';
import { images } from '../images.js';

export default function RegisterView({ onBack, onLogin }) {
  return <div className="login-view">
    <button type="button" className="login-back" aria-label="Volver" onClick={onBack}><Icon name="left" size={22} /></button>
    <div className="login-content">
      <img className="login-logo" src={images.logo} alt="Colombia Canta y Encanta" />
      <div className="login-intro">
        <h1>Crear Cuenta</h1>
        <div className="profile-divider login-divider" aria-hidden="true">
          <span className="profile-divider-line" />
          <Icon name="clover" size={20} className="profile-divider-icon" />
          <span className="profile-divider-line" />
        </div>
        <p>Completa tus datos para registrarte.</p>
      </div>

      <form className="login-form" aria-label="Formulario de registro">
        <div className="login-field">
          <label htmlFor="register-name">Nombre completo<span className="entry-required"> *</span></label>
          <div className="login-input">
            <input id="register-name" name="name" type="text" placeholder="ej: Isabella Castro Camacho" readOnly aria-required="true" />
          </div>
        </div>

        <div className="login-field">
          <label htmlFor="register-birthdate">Fecha de nacimiento<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="calendar" size={20} />
            <input id="register-birthdate" name="birthdate" type="text" placeholder="MM/DD/AAAA" readOnly aria-required="true" />
          </div>
        </div>

        <div className="login-field">
          <label htmlFor="register-email">Correo electrónico<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="mail" size={20} />
            <input id="register-email" name="email" type="email" placeholder="ej: isabellacastro123@gmail.com" readOnly aria-required="true" />
          </div>
        </div>

        <div className="login-field">
          <label htmlFor="register-password">Contraseña<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="lock" size={20} />
            <input id="register-password" name="password" type="password" placeholder="Ingresa tu contraseña" readOnly aria-required="true" />
            <Icon name="eye" size={20} />
          </div>
          <div className="login-requirements">
            <span className="login-requirement"><span className="login-requirement-dot" />Seis letras</span>
            <span className="login-requirement"><span className="login-requirement-dot" />Dos números</span>
          </div>
        </div>

        <div className="login-field">
          <label htmlFor="register-password-confirm">Repetir contraseña<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="lock" size={20} />
            <input id="register-password-confirm" name="password-confirm" type="password" placeholder="Repite tu contraseña" readOnly aria-required="true" />
            <Icon name="eyeOff" size={20} />
          </div>
        </div>

        <button type="submit" className="visual-button login-submit">Crear cuenta</button>
      </form>
      <p className="login-footer">¿Ya tienes una cuenta? <button type="button" className="login-link" onClick={onLogin}>Iniciar sesión</button></p>
    </div>
  </div>;
}
