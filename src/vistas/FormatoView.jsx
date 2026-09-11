
import Icon from '../Icons.jsx';

import { images } from '../images.js';



function FormSection({ number, title, children }) { //ste componente sirve para crear cada SECCIÓN del formulario.

  return (

    <section
      className="entry-section"
      aria-labelledby={`entry-section-${number}`}
    >

      {/* Título de la sección */}
      <h2
        id={`entry-section-${number}`}
        className="entry-section-title"
      >

        {/* Número de la sección */}
        <span className="entry-section-number">
          {number}
        </span>

        {/* Nombre de la sección */}
        {title}

      </h2>


      {/* Aquí aparecerá todo lo que pongamos
          dentro del componente FormSection */}
      <div className="entry-section-body">
        {children}
      </div>

    </section>
  );
}




function TextField({ // Este componente crea un campo de texto del formulario.
//
  id,
  label,
  placeholder,
  type = 'text'
}) {

  return (
    <div className="entry-field">

      {/* Label = texto que identifica el campo */}

      {/* htmlFor={id} conecta el label con el input
          que tenga ese mismo id */}
      <label htmlFor={id}>

        {label}

        {/* Asterisco rojo para indicar que el campo es obligatorio */}
        <span className="entry-required">
          {' '}*
        </span>

      </label>


      {/* Campo donde normalmente escribiría el usuario */}
      <input

        // Identificador único del input
        id={id}

        // Nombre que tendría este dato si enviáramos un formulario
        name={id}

        // Puede ser text, email, number, etc.
        type={type}

        // Texto de ejemplo que aparece dentro del campo
        placeholder={placeholder}

        // readOnly significa que el usuario NO puede modificar el contenido.
        readOnly

        // Indica que este campo es obligatorio.
        aria-required="true"
      />

    </div>
  );
}




function SelectField({ id, label, placeholder }) { //Este componente crea una lista desplegable.
//

  return (
    <div className="entry-field">

      {/* Texto que describe el select */}
      <label htmlFor={id}>

        {label}

        {/* Indica que el campo es obligatorio */}
        <span className="entry-required">
          {' '}*
        </span>

      </label>


      {/* Contenedor del select y del icono de flecha */}
      <div className="entry-select">

        <select

          id={id}

          // "" será el valor seleccionado inicialmente
          defaultValue=""

          // disabled impide que el usuario pueda abrirlo
          disabled

          // Indica que debería ser obligatorio.
          aria-required="true"
        >

          {/* Primera opción visible del select */}
          <option value="">
            {placeholder}
          </option>

        </select>


        {/* Icono de flecha hacia abajo */}
        <Icon
          name="down"
          size={23}
        />

      </div>

    </div>
  );
}




function UploadPlaceholder({ //Este componente representa visualmente una zona para subir archivos.
  icon,
  title,
  description //información sobre formatos, peso máximo, etc.
}) {

  return (
    <div className="entry-upload">

      {/* Contenedor del icono */}
      <span className="entry-upload-icon">

        {/* El nombre del icono viene desde la propiedad "icon" */}
        <Icon
          name={icon}
          size={23}
        />

      </span>


      {/* Nombre de la acción.
          Ejemplo: "Subir video de audición" */}
      <span>
        {title}
      </span>


      {/* Información adicional.
          Ejemplo: "MP4, MOV o AVI · Máx. 200MB" */}
      <small>
        {description}
      </small>

    </div>
  );
}




export default function FormatoView() { // Este es el componente principal de toda la vista.

  return (

    // Contenedor principal de toda la pantalla.
    <div className="entry-view">


      {/* ==================================================
          HEADER
          ================================================== */}

      <header className="entry-header">

        {}
        <img
          src={images.logo}
          alt="Colombia Canta y Encanta"
        />

      </header>


      {}
      <div
        className="pattern-band"
        aria-hidden="true"
      />


      {/* ==================================================
          CONTENIDO PRINCIPAL
          ================================================== */}

      <div className="entry-content">


        {/* ==================================================
            INTRODUCCIÓN DEL FORMULARIO
            ================================================== */}

        <div className="entry-intro">

          {/* <br /> hace un salto de línea */}
          <h1>
            ¿Quieres ser parte de
            <br />
            nuestro equipo?
          </h1>

          <p>
            Llena tus datos y recibirás confirmación
            inmediata por correo electrónico.
          </p>

        </div>



        {/* ==================================================
            FORMULARIO
            ================================================== */}

        <div
          className="entry-form"
          aria-label="Formulario de inscripción"
        >


          {/* ==================================================
              SECCIÓN 1
              DATOS DEL PARTICIPANTE
              ================================================== */}

          <FormSection
            number="1"
            title="Datos del Participante"
          >

            {/* Campo para nombre */}
            <TextField
              id="participant-name"
              label="Nombre completo del participante"
              placeholder="Ej: Isabella Castro Camacho"
            />


            {}
            <TextField
              id="participant-age"
              label="Edad"
              placeholder="Ej: 5"
              type="number"
            />


            {}
            <TextField
              id="participant-email"
              label="Correo Electrónico"
              placeholder="Ej: nombre@correo.com"
              type="email"
            />

          </FormSection>



          {/* ==================================================
              SECCIÓN 2
              CATEGORÍA
              ================================================== */}

          <FormSection
            number="2"
            title="Categoría a Participar"
          >

            {/* Lista para elegir categoría */}
            <SelectField
              id="participant-category"
              label="Selecciona una categoría"
              placeholder="Selecciona una categoría"
            />


            {/* Lista para elegir departamento */}
            <SelectField
              id="participant-department"
              label="Departamento"
              placeholder="Selecciona un departamento"
            />

          </FormSection>



          {/* ==================================================
              SECCIÓN 3
              VIDEO DE AUDICIÓN
              ================================================== */}

          <FormSection
            number="3"
            title="Video audición"
          >

            {}
            <UploadPlaceholder
              icon="upload"
              title="Subir video de audición"
              description="MP4, MOV o AVI · Máx. 200MB · Máx. 3 minutos"
            />

          </FormSection>



          {/* ==================================================
              SECCIÓN 5
              CONSENTIMIENTO
              ================================================== */}

          <FormSection
            number="5"
            title="Consentimiento"
          >


            {/* Elemento visual para descargar
                el documento de consentimiento.

                Actualmente es un <div>, por lo que
                todavía no descarga nada realmente. */}
            <div className="entry-download">

              {/* Icono de documento */}
              <Icon
                name="document"
                size={22}
              />

              Descargar consentimiento

            </div>


            {/* Área para subir el consentimiento firmado */}
            <UploadPlaceholder
              icon="paperclip"
              title="Subir Consentimiento"
              description="PDF · Máx. 20MB"
            />

          </FormSection>



          {/* ==================================================
              AUTORIZACIÓN DE DATOS
              ================================================== */}

          {/* El label contiene tanto el checkbox
              como el texto de autorización. */}
          <label
            className="entry-consent"
            htmlFor="participant-consent"
          >

            {/* Checkbox.

                disabled significa que actualmente
                el usuario NO puede marcarlo. */}
            <input
              id="participant-consent"
              type="checkbox"
              disabled
            />


            {/* Texto legal */}
            <span>

              Autorizo el tratamiento de mis datos personales
              conforme a la Política de Privacidad. Para menores
              de edad debe ser firmado el consentimiento por un
              acudiente.

              {/* Asterisco para indicar que es obligatorio */}
              <span className="entry-required">
                {' '}*
              </span>

            </span>

          </label>



          {/* ==================================================
              BOTÓN SIGUIENTE
              ================================================== */}

          {}
          <div className="visual-button entry-next">
            Siguiente
          </div>

        </div>

      </div>


      {/* Banda decorativa inferior */}
      <div
        className="pattern-band"
        aria-hidden="true"
      />

    </div>
  );
}