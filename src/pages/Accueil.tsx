import Navigation from '../components/Navigation';

function Accueil() {
  return (
    <div>
      <Navigation />
      <div className="accueil">
        <h1>Pierre Mangeot</h1>
        <h2>Developpeur WEB FULLSTACK</h2>
        <div className="pdf">
          <a href="CV-PierreMangeot.pdf" target="_blank">
            Télécharger le CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
