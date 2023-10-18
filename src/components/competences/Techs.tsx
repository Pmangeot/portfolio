import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Techs extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 1 },
      { id: 2, value: 'CSS', xp: 1 },
      { id: 3, value: 'SQL', xp: 0.8 },
      { id: 4, value: 'Java', xp: 0.3 },
    ],
    frameworks: [
      { id: 1, value: 'Express', xp: 0.8 },
      { id: 2, value: 'React', xp: 0.4 },
      { id: 3, value: 'Sass', xp: 0.4 },
    ],
  };

  render() {
    const { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="Languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks"
        />
      </div>
    );
  }
}

export default Techs;
