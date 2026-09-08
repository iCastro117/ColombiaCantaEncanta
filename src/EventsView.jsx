import Icon from './Icons.jsx';
import { images } from './images.js';
import './css/events.css';

const events = [
  { id: 'canto', title: 'Festival infantil de canto', date: '15, Ago', location: 'Bogotá, Cundinamarca', category: 'Canto Infantil' },
  { id: 'danzas', title: 'Encuentro de Danzas Tradicionales', date: '22, Ago', location: 'Bogotá, Cundinamarca', category: 'Danza Folclórica' },
  { id: 'andina', title: 'Muestra de música Andina', date: '30, Ago', location: 'Cali, Valle del Cauca', category: 'Música instrumental' },
  { id: 'ritmos', title: 'Ritmos que encantan', date: '02, Ago', location: 'Pereira, Risaralda', category: 'Danza y expresión' },
  { id: 'narracion', title: 'Relatos de nuestra tierra', date: '30, Ago', location: 'Medellín, Antioquia', category: 'Narración y música' },
  { id: 'ensamble', title: 'Voces de Colombia', date: '02, Ago', location: 'Bogotá, Cundinamarca', category: 'Canto y ensamble' },
];

function EventCard({ event }) {
  return <article className="event-card">
    <div className="event-card-cover">
      <img src={images.eventos[event.id]} alt={event.title} />
      <span className="event-date">{event.date}</span>
      <span className="event-favorite" aria-hidden="true"><Icon name="heart" size={20} /></span>
    </div>
    <div className="event-card-body">
      <p className="event-location"><Icon name="pin" size={13} /><span>{event.location}</span></p>
      <h2>{event.title}</h2>
      <div className="event-category"><span>{event.category}</span><Icon name="right" size={22} /></div>
    </div>
  </article>;
}

export default function EventsView() {
  return <div className="events-view">
    <header className="entry-header">
      <img src={images.logo} alt="Colombia Canta y Encanta" />
    </header>
    <div className="pattern-band" aria-hidden="true" />
    <section className="events-content" aria-labelledby="events-title">
      <div className="events-intro">
        <h1 id="events-title">Eventos</h1>
        <p>Descubre y participa en nuestros eventos folclóricos a nivel nacional</p>
      </div>

      <div className="events-toolbar">
        <div className="events-search"><Icon name="search" size={21} /><input type="search" aria-label="Buscar eventos" placeholder="Buscar Eventos..." readOnly /></div>
        <span className="events-filter-icon" role="img" aria-label="Filtros"><Icon name="filters" size={22} /></span>
      </div>
      <ul className="events-filters" aria-label="Filtros de eventos, vista visual">
        {['Todos', 'Próximos', 'Populares', 'Por región'].map((label, index) => <li className={index === 0 ? 'selected' : ''} key={label}>{label}</li>)}
      </ul>

      <div className="events-grid">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>

      <div className="events-pagination" aria-label="Paginación, vista visual">
        <span className="selected" aria-label="Página 1, actual">1</span><span>2</span><span>3</span><span>...</span>
      </div>
    </section>
  </div>;
}
