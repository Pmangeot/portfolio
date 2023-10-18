/* eslint-disable react/destructuring-assignment */

interface ProgressBarProps {
  className: string;
  title: string;
  languages: {
    id: number;
    value: string;
    xp: number;
  }[];
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Expérience</span>
        <span>6 mois</span>
        <span>1 an</span>
      </div>

      <div>
        {props.languages.map((item) => {
          const xpYears = 1;
          const progressBar = `${(item.xp / xpYears) * 100}%`;

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
