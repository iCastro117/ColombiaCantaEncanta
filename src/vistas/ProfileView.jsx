import Icon from '../Icons.jsx';
import { images } from '../images.js';

const profileMenu = [
  { icon: 'book', title: 'Cursos inscritos', description: 'Consulta los cursos en los que estás participando.' },
  { icon: 'heart', title: 'Favoritos', description: 'Consulta tus cursos Favoritos.' },
  { icon: 'clipboard', title: 'Audiciones', description: 'Revisa el estado de tus audiciones.' },
];

export default function ProfileView() {
  return <div className="profile-view">
    <header className="entry-header">
      <img src={images.logo} alt="Colombia Canta y Encanta" />
    </header>
    <div className="pattern-band" aria-hidden="true" />
    <section className="profile-content">
      <div className="profile-card">
        <img className="profile-avatar" src={images.perfil} alt="Isabella Castro" />
        <div className="profile-identity">
          <h1>Isabella Castro</h1>
          <p>isabellacastrocamacho117@gmail.com</p>
          <div className="profile-divider" aria-hidden="true">
            <span className="profile-divider-line" />
            <Icon name="clover" size={22} className="profile-divider-icon" />
            <span className="profile-divider-line" />
          </div>
        </div>
      </div>
      <div className="profile-menu">
        {profileMenu.map((item) => <button type="button" className="profile-menu-item" key={item.title}>
          <span className="profile-menu-icon"><Icon name={item.icon} size={22} /></span>
          <span className="profile-menu-text"><strong>{item.title}</strong><span>{item.description}</span></span>
          <Icon name="right" size={20} />
        </button>)}
      </div>
    </section>
    <div className="pattern-band" aria-hidden="true" />
  </div>;
}
