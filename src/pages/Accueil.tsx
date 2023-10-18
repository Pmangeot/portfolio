import Navigation from '../components/Navigation';

function Accueil() {
  return (
    <div className="accueil">
      <Navigation />
      <div className="accueilContent">
        <div className="content">
          <h1>Pierre Mangeot</h1>
          <h2>Developpeur WEB FULLSTACK</h2>
          <div className="pdf">
            <a href="CV-PierreMangeot.pdf" target="_blank">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
