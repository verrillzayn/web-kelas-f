import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListCard from './ListCard';

const ListModal = (props) => {
  const [show, setShow] = useState(false);

  const [inputValues, setInputValue] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [matkul, setMatkul] = useState();
  const [tugas, setTugas] = useState();
  const [deadline, setDeadline] = useState();

  useEffect(() => {
    if (localStorage.getItem('localTasks')) {
      const storedList = JSON.parse(localStorage.getItem('localTasks'));
      setTasks(storedList);
    }
  }, []);

  const getTugas = (e) => {
    setTugas(e.target.value);
  };
  const getMatkul = (e) => {
    setMatkul(e.target.value);
  };
  const getDeadline = (e) => {
    setDeadline(e.target.value);
  };

  useEffect(() => {
    getInputValues();
  }, [tugas, matkul, deadline]);

  const getInputValues = () => {
    setInputValue([tugas, matkul, deadline]);
  };

  const handleSubmit = (e) => {
    if (inputValues) {
      const newTask = { id: new Date().getTime().toString(), val: { tugas: inputValues[0], matkul: inputValues[1], deadline: inputValues[2] } };
      setTasks([...tasks, newTask]);
      localStorage.setItem('localTasks', JSON.stringify([...tasks, newTask]));
      setInputValue([]);
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem('localTasks', JSON.stringify(deleted));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add new task
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="tugas" placeholder="Tugas" onChange={getTugas} />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="matkul" placeholder="Matkul" onChange={getMatkul} />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="deadline" placeholder="Deadline" onChange={getDeadline} />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container-card task-card-list">
        {tasks.map((e) => {
          return <ListCard key={e.id} handleDelete={() => handleDelete(e)} tugas={e.val.tugas} matkul={e.val.matkul} deadline={e.val.deadline} />;
        })}
      </div>
    </>
  );
};

export default ListModal;
