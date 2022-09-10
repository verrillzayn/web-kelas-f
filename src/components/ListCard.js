import React from 'react';
import { Button } from 'react-bootstrap';

const ListCard = (props) => {
  return (
    <div className="card task-item list-card">
      <div className="card-body">
        <h5 className="card-tittle">Tugas: {props.tugas}</h5>
        <h5 className="card-tittle">Matkul: {props.matkul}</h5>
        <h5 className="card-tittle">Deadline: {props.deadline}</h5>
        <div className="div-btn-inCardTaskList">
          <Button className="btn-edit" variant="primary">
            edit
          </Button>
          <Button className="btn-delete" variant="primary">
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
