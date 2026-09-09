import Icon from '../Icons.jsx';
import { images } from '../images.js';

export default function LoginView({ onBack, onRegister }) {
  return <div className="login-view">
    <button type="button" className="login-back" aria-label="Volver" onClick={onBack}><Icon name="left" size={22} /></button>
    <div className="login-content">
      <img className="login-logo" src={images.logoAuth} alt="Colombia Canta y Encanta" />
      <div className="login-intro">
        <h1>Iniciar sesión</h1>
        <div className="profile-divider login-divider" aria-hidden="true">
          <span className="profile-divider-line" />
          <Icon name="clover" size={20} className="profile-divider-icon" />
          <span className="profile-divider-line" />
        </div>
        <p>Ingresa los datos de tu cuenta para continuar.</p>
      </div>

      <form className="login-form" aria-label="Formulario de inicio de sesión">
        <div className="login-field">
          <label htmlFor="login-email">Correo electrónico<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="mail" size={20} />
            <input id="login-email" name="email" type="email" placeholder="ej: isabellacastro123@gmail.com" readOnly aria-required="true" />
          </div>
        </div>

        <div className="login-field">
          <label htmlFor="login-password">Contraseña<span className="entry-required"> *</span></label>
          <div className="login-input">
            <Icon name="lock" size={20} />
            <input id="login-password" name="password" type="password" placeholder="Ingresa tu contraseña" readOnly aria-required="true" />
            <Icon name="eye" size={20} />
          </div>
          <div className="login-requirements">
            <span className="login-requirement"><span className="login-requirement-dot" />Seis letras</span>
            <span className="login-requirement"><span className="login-requirement-dot" />Dos números</span>
          </div>
        </div>

        <button type="submit" className="visual-button login-submit">Iniciar Sesión</button>
      </form>
      <p className="login-footer">¿No tienes una cuenta? <button type="button" className="login-link" onClick={onRegister}>Regístrate</button></p>
    </div>
  </div>;
}
