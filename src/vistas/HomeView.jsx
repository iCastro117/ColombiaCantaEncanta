import { useState } from 'react';
import Icon from '../Icons.jsx';
import { images } from '../images.js';

//banda decorativa
function PatternBand() {
  return <div className="pattern-band" aria-hidden="true" />;
}

//onda
function Wave({ bottom = false }) {
  return <svg className={`wave ${bottom ? 'wave-bottom' : ''}`} viewBox="0 0 390 90" preserveAspectRatio="none" aria-hidden="true">
    <path fill="var(--cream)" d="M0 45C25 12 77 5 110 23C131 34 133 53 149 57C168 27 218 20 253 39C275 52 282 54 300 47C325 18 366 16 390 26V90H0Z" />
    <path fill="var(--blue)" d="M0 60C34 38 64 39 94 59C122 82 166 82 198 64C237 43 272 40 309 64C337 86 367 92 390 82V90H0Z" />
  </svg>;
}

const carouselSlides = [
  { image: images.carrusel[0], title: 'Música Infantil y Juvenil 2026', date: '15–20 Ago 2026', alt: 'Presentación de música tradicional colombiana' },
  { image: images.carrusel[1], title: 'Premiación concurso 2026', date: '26 Jul 2026', alt: 'Participantes durante la premiación del concurso' },
  { image: images.carrusel[2], title: '“Encuentro de cuerdas” Ensamble musical', date: '22 Jul 2026', alt: 'Integrantes del ensamble musical Encuentro de cuerdas' },
  { image: images.carrusel[3], title: 'Coro Sirenaica', date: '21 Jul 2026', alt: 'Integrantes del Coro Sirenaica' },
];

//app.js onPartivcipate
function Hero({ onParticipate }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = carouselSlides[slideIndex]; //comodidad


  //cambia de direccion el carrusle y % para dar la vuelta de nuevo continuamente
  function changeSlide(direction) {
    setSlideIndex((current) => (current + direction + carouselSlides.length) % carouselSlides.length);
  }

  return <>
    <header className="hero">
      <div className="hero-inner">
        <img className="header-logo" src={images.logo} alt="Colombia Canta y Encanta" />
        <div className="carousel" role="region" aria-roledescription="carrusel" aria-label="Eventos del festival">
          <img className="carousel-image" src={slide.image} alt={slide.alt} />
          <button type="button" className="carousel-arrow previous" aria-label="Imagen anterior" onClick={() => changeSlide(-1)}><Icon name="left" size={34} /></button>
          <button type="button" className="carousel-arrow next" aria-label="Imagen siguiente" onClick={() => changeSlide(1)}><Icon name="right" size={34} /></button>
          <div className="carousel-caption" aria-live="polite" aria-atomic="true">
            <h1>{slide.title}</h1>
            <div className="event-details">
              <span><Icon name="calendar" size={13} />{slide.date}</span>
              <span><Icon name="pin" size={13} />Bogotá, Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <PatternBand />
    <section className="participate content-width">
      <p>Participa y demuestra tu talento folclórico. Abierto<br className="desktop-break" /> para niños y jóvenes de todas las regiones de Colombia</p>
      <button type="button" className="visual-button participate-button" onClick={onParticipate}>Participa y Encanta</button>
    </section>
    <PatternBand />
  </>;
}

const stats = [
  { icon: 'people', value: '5.000+', label: 'Participantes' },
  { icon: 'check', value: '20+', label: 'Años de historia' },
  { icon: 'mountain', value: '32', label: 'Departamentos' },
  { icon: 'music', value: '10+', label: 'Categorías' },
];

const steps = [
  ['Explora Categorías', 'Elige la categoría en la que deseas participar.'],
  ['Completa el Formulario', 'Llena tus datos.'],
  ['Confirmación', 'Recibe confirmación por correo.'],
  ['Participa', 'Prepárate y disfruta del festival.'],
];

function Festival() {
  return <>
    <section className="festival content-width">
      <img className="festival-image" src={images.inicio} alt="Niños del festival con trajes típicos y la bandera de Colombia" />
      <div className="festival-copy">
        <span className="section-tag">Sobre el Festival</span>
        <h2>El Festival Nacional<br />Colombia Canta y Encanta</h2>
        <p>Es el evento folclórico infantil más importante del país. Busca preservar y promocionar la música tradicional colombiana entre los niños y jóvenes, impulsando el talento y las raíces culturales de todas las regiones.</p>
        <p>Con más de 20 años de historia, el festival reúne a miles de artistas que demuestran que el folclor colombiano es vivo, vigente y lleno de futuro.</p>
      </div>
    </section>
    <section className="festival-numbers" aria-label="El festival en cifras y cómo inscribirse">
      <Wave />
      <div className="numbers-inner content-width">
        <div className="stats-grid">
          {stats.map((stat) => <div className="stat-card" key={stat.label}> //Por cada stat de la lista, dibuja una tarjeta.
            <span className="stat-icon"><Icon name={stat.icon} size={29} /></span> // contiene el icno, el: 
            <strong>{stat.value}</strong>//nuemro
            <span>{stat.label}</span>//etiqueta i texto
          </div>)}
        </div>
        <div className="registration">
          <h2>Cómo inscribirse</h2>
          <ol className="steps"> //geenr aiuna lista ordenada de Ol de steps
            {steps.map(([title, description], index) =>  //Por cada step de la lista, dibuja un item de lista qucontega el titulo y deipcion
            <li key={title}>  //cada card contiene, numero titulo yd escripcion
              <span className="step-number">0{index + 1}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>)}
          </ol>
        </div>
      </div>
      <Wave bottom />
    </section>
  </>;
}

const courses = [
  { title: 'Canto Grupal y Coreográfico', image: images.canto, description: 'Interpreta ritmos tradicionales: bambuco, pasillo, torbellino y otras expresiones del canto regional colombiano.', ages: '6 a 14 años', formats: ['Individual', 'Dúo', 'Grupal'] },
  { title: 'Iniciación Musical', image: images.iniciacion, description: 'Combina el canto, expresión corporal que afianza las habilidades musicales en un entorno positivo y con repertorios apropiados a la edad.', ages: '4 a 5 años', formats: ['Grupal'] },
  { title: 'Instrumento personalizado', image: images.instrumento, description: 'Este curso es personalizado en instrumentos como: piano, guitarra acústica y eléctrica, ukelele, bajo, tiple, bandola y más.', ages: '7 años en adelante', formats: ['Individual', 'Grupal'] },
];

function Courses() {
  return <section className="courses">
    <div className="content-width">
      <div className="courses-heading"><h2>Encuentra tu forma de<br />expresión</h2><p>Accede a nuestros diferentes cursos</p></div>
      <div className="course-grid">
        {courses.map((course) => <article className="course-card" key={course.title}>
          <div className="course-cover"><img src={course.image} alt={course.title} /><h3>{course.title}</h3></div>
          <div className="course-body">
            <p className="course-description">{course.description}</p>
            <div className="course-info">
              <div className="course-ages"><span>Edades</span><strong>{course.ages}</strong></div>
              <div className="course-formats">{course.formats.map((format) => <span key={format}>{format}</span>)}</div>
            </div>
            <div className="visual-button course-button">Inscribirme aquí</div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Team() {
  return <>
    <PatternBand />
    <section className="team content-width">
      <h2>¿Quieres ser parte de<br />nuestro equipo?</h2>
      <p>Llena tus datos y recibirás confirmación inmediata por correo electrónico.</p>
      <div className="visual-button team-button">Llenar Formulario</div>
    </section>
    <PatternBand />
  </>;
}

const questions = [
  '¿Quiénes pueden participar?',
  '¿Cómo puedo inscribirme?',
  '¿Qué documentos necesito enviar?',
  '¿Cuál es la fecha límite de inscripción?',
  '¿Qué documentos necesito enviar?',
  '¿Cómo sé que mi inscripción fue exitosa?',
];

function Faq() {
  return <section className="faq content-width">
    <h2>Preguntas Frecuentes</h2>
    <p className="faq-intro">Aquí encontrarás las respuestas más comunes sobre el festival y el proceso de inscripción.</p>
    <ul className="questions">
      {questions.map((question, index) => <li key={index}><span>{question}</span><Icon name="right" size={24} /></li>)}
    </ul>
    <div className="visual-button whatsapp-button"><Icon name="whatsapp" size={23} />Contactar soporte por WhatsApp</div>
  </section>;
}

export default function HomeView({ onParticipate }) {
  return <>
    <Hero onParticipate={onParticipate} />
    <Festival />
    <Courses />
    <Team />
    <Faq />
  </>;
}
