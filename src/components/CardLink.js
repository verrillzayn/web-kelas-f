import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card task-item card-home">
      <div className="card-body">
        <Link className="card-a" to={props.link}>
          <h5 className="card-tittle">{props.text}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
