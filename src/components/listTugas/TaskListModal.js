import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskListModal = () => {
  const [show, setShow] = useState(false);

  const [tugas, setTugas] = useState('');
  const [matkul, setmatkul] = useState('');
  const [deadline, setdeadline] = useState('');
  const navigate = useNavigate();

  const saveTask = async (e) => {
    // e.preventDefault();
    try {
      await axios.post('http://localhost:5000/task-list', {
        tugas,
        matkul,
        deadline,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" style={{ width: '100%' }} onClick={handleShow}>
        add new task
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="tugas" placeholder="Tugas" onChange={(e) => setTugas(e.target.value)} autoFocus />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="matkul" placeholder="Matkul" onChange={(e) => setmatkul(e.target.value)} />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="deadline" placeholder="Deadline" onChange={(e) => setdeadline(e.target.value)} />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              saveTask();
            }}
          >
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskListModal;
