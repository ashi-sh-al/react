import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="tc">
        <div className="top">
          <img
            src={props.logo}
            alt="Logo"
          />
          <button>
            Save <Bookmark color="#b1b1b1" size={16} />
          </button>
        </div>
        <div className="center">
          <h2>
            {props.company} <span>{props.posted}</span>
          </h2>
          <h3>{props.title}</h3>
          <div className="type">
            <p>{props.jobType}</p>
            <p>{props.level}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h3>
          {props.salary} <br /> <span>{props.location}</span>
        </h3>
        <a href={props.apply} target="_blank" rel="noreferrer">
        <button>Apply now</button></a>
      </div>
    </div>
  );
};

export default Card;
