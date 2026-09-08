import Icon from '../Icons.jsx';
import { images } from '../images.js';

function FormSection({ number, title, children }) {
  return <section className="entry-section" aria-labelledby={`entry-section-${number}`}>
    <h2 id={`entry-section-${number}`} className="entry-section-title">
      <span className="entry-section-number">{number}</span>{title}
    </h2>
    <div className="entry-section-body">{children}</div>
  </section>;
}

function TextField({ id, label, placeholder, type = 'text' }) {
  return <div className="entry-field">
    <label htmlFor={id}>{label}<span className="entry-required"> *</span></label>
    <input id={id} name={id} type={type} placeholder={placeholder} readOnly aria-required="true" />
  </div>;
}

function SelectField({ id, label, placeholder }) {
  return <div className="entry-field">
    <label htmlFor={id}>{label}<span className="entry-required"> *</span></label>
    <div className="entry-select">
      <select id={id} defaultValue="" disabled aria-required="true">
        <option value="">{placeholder}</option>
      </select>
      <Icon name="down" size={23} />
    </div>
  </div>;
}

function UploadPlaceholder({ icon, title, description }) {
  return <div className="entry-upload">
    <span className="entry-upload-icon"><Icon name={icon} size={23} /></span>
    <span>{title}</span>
    <small>{description}</small>
  </div>;
}

export default function FormatoView() {
  return <div className="entry-view">
    <header className="entry-header">
      <img src={images.logo} alt="Colombia Canta y Encanta" />
    </header>
    <div className="pattern-band" aria-hidden="true" />

    <div className="entry-content">
      <div className="entry-intro">
        <h1>¿Quieres ser parte de<br />nuestro equipo?</h1>
        <p>Llena tus datos y recibirás confirmación inmediata por correo electrónico.</p>
      </div>

      <div className="entry-form" aria-label="Formulario de inscripción">
        <FormSection number="1" title="Datos del Participante">
          <TextField id="participant-name" label="Nombre completo del participante" placeholder="Ej: Isabella Castro Camacho" />
          <TextField id="participant-age" label="Edad" placeholder="Ej: 5" type="number" />
          <TextField id="participant-email" label="Correo Electrónico" placeholder="Ej: nombre@correo.com" type="email" />
        </FormSection>

        <FormSection number="2" title="Categoría a Participar">
          <SelectField id="participant-category" label="Selecciona una categoría" placeholder="Selecciona una categoría" />
          <SelectField id="participant-department" label="Departamento" placeholder="Selecciona un departamento" />
        </FormSection>

        <FormSection number="3" title="Video audición">
          <UploadPlaceholder icon="upload" title="Subir video de audición" description="MP4, MOV o AVI · Máx. 200MB · Máx. 3 minutos" />
        </FormSection>

        <FormSection number="5" title="Consentimiento">
          <div className="entry-download"><Icon name="document" size={22} />Descargar consentimiento</div>
          <UploadPlaceholder icon="paperclip" title="Subir Consentimiento" description="PDF · Máx. 20MB" />
        </FormSection>

        <label className="entry-consent" htmlFor="participant-consent">
          <input id="participant-consent" type="checkbox" disabled />
          <span>Autorizo el tratamiento de mis datos personales conforme a la Política de Privacidad. Para menores de edad debe ser firmado el consentimiento por un acudiente.<span className="entry-required"> *</span></span>
        </label>
        <div className="visual-button entry-next">Siguiente</div>
      </div>
    </div>
    <div className="pattern-band" aria-hidden="true" />
  </div>;
}
