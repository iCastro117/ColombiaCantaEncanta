import { useState } from 'react';
import Icon from './Icons.jsx';
import { images } from './images.js';
import HomeView from './vistas/HomeView.jsx';
import EventsView from './vistas/EventsView.jsx';
import FormatoView from './vistas/FormatoView.jsx';
import ProfileView from './vistas/ProfileView.jsx';
import LoginView from './vistas/LoginView.jsx';
import RegisterView from './vistas/RegisterView.jsx';

function FooterContent() {
  return <div className="footer-inner content-width">
    <div className="footer-brand">
      <img className="footer-logo" src={images.logo} alt="Colombia Canta y Encanta" />
      <p>El festival folclórico nacional que celebra la identidad cultural colombiana.</p>
      <div className="social-icons" aria-label="Redes sociales">
        {['instagram', 'facebook', 'youtube'].map((name) => <span className="social-icon" key={name} role="img" aria-label={name}><Icon name={name} size={20} /></span>)}
      </div>
    </div>
    <div className="footer-navigation"><h2>Navegación</h2><ul>{['Inicio', 'Festival', 'Categorías', 'Inscripción', 'FAQ'].map((item) => <li key={item}>{item}</li>)}</ul></div>
    <div className="footer-contact">
      <h2>Contacto</h2>
      <p><Icon name="pin" size={17} /><span>Medellín, Colombia&nbsp;&nbsp; – &nbsp;&nbsp;Calle 49 #76a – 65</span></p>
      <p><Icon name="phone" size={17} /><span>+57 3216048759</span></p>
    </div>
    <p className="footer-copyright">©2025 por Colombia Canta y Encanta.</p>
  </div>;
}

function Footer() {
  return <footer className="footer"><FooterContent /></footer>;
}

function BottomBar({ view, onNavigate }) {
  const items = [
    { icon: 'home', label: 'Inicio', view: 'home' },
    { icon: 'bookmark', label: 'Inscripción', view: 'formato' },
    { icon: 'layers', label: 'Eventos', view: 'events' },
    { icon: 'profile', label: 'Perfil', view: 'profile' },
  ];

  return <nav className="bottom-bar" aria-label="Navegación principal">
    <div className="bottom-bar-inner">
      {items.map((item) => item.view ? <button
        type="button"
        className={`bottom-item ${view === item.view ? 'is-active' : ''}`}
        key={item.icon}
        aria-label={item.label}
        aria-current={view === item.view ? 'page' : undefined}
        onClick={() => onNavigate(item.view)}
      ><span><Icon name={item.icon} size={30} /></span></button> :
        <div className="bottom-item" key={item.icon} role="img" aria-label={item.label}>
          <span><Icon name={item.icon} size={30} /></span>
        </div>)}
    </div>
  </nav>;
}

export default function App() {
  const [view, setView] = useState('home');

  function navigate(nextView) {
    setView(nextView);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  function renderMain() {
    if (view === 'home') return <HomeView onParticipate={() => navigate('login')} />;
    if (view === 'formato') return <FormatoView />;
    if (view === 'profile') return <ProfileView />;
    if (view === 'login') return <LoginView onBack={() => navigate('home')} onRegister={() => navigate('register')} />;
    if (view === 'register') return <RegisterView onBack={() => navigate('home')} onLogin={() => navigate('login')} onCreateAccount={() => navigate('profile')} />;
    return <EventsView />;
  }

  const isAuth = view === 'login' || view === 'register';

  return <>
    <main>{renderMain()}</main>
    {!isAuth && <Footer />}
    {!isAuth && <BottomBar view={view} onNavigate={navigate} />}
  </>;
}
