import Navigation from '../components/Navigation';
import Experience from '../components/competences/Experience';
import SoftSkills from '../components/competences/SoftSkills';
import Techs from '../components/competences/Techs';
import Hobbies from '../components/competences/Hobbies';

function Competences() {
  return (
    <div className="competences">
      <Navigation />
      <div className="competencesContent">
        <Techs />
        <Experience />
        <SoftSkills />
        <Hobbies />
      </div>
    </div>
  );
}

export default Competences;
