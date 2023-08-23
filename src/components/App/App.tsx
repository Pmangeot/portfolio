import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../../pages/Accueil';
import Competences from '../../pages/Competences';
import Contact from '../../pages/Contact';
import Portfolio from '../../pages/Portfolio';
import notfound from '../../pages/notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/competences" Component={Competences} />
        <Route path="/contact" Component={Contact} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/" Component={Accueil} />
        <Route Component={notfound} />
      </Routes>
    </Router>
  );
}

export default App;
