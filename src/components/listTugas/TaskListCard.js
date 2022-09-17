import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TaskListCard = () => {
  const [tasksList, setTasksList] = useState([]);
  const [tugas, setTugas] = useState('');
  const [matkul, setMatkul] = useState('');
  const [deadline, setDeadline] = useState('');
  const [taskId, setTaskId] = useState('');

  const updateTask = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/task-list/${id}`, {
        tugas,
        matkul,
        deadline,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskById = async (id) => {
    const response = await axios.get(`http://localhost:5000/task-list/${id}`);
    setTugas(response.data.tugas);
    setMatkul(response.data.matkul);
    setDeadline(response.data.deadline);
    setTaskId(response.data._id);
  };

  useEffect(() => {
    getTasks();
  }, [tasksList]);

  const getTasks = async () => {
    const response = await axios.get('http://localhost:5000/task-list');
    setTasksList(response.data);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/task-list/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-card task-card-list">
      {tasksList.map((task, index) => {
        return (
          <div key={task._id} className="card task-item list-card">
            <div className="card-body">
              <h5 className="card-tittle">Tugas: {task.tugas}</h5>
              <h5 className="card-tittle">Matkul: {task.matkul}</h5>
              <h5 className="card-tittle">Deadline: {task.deadline}</h5>
              <div className="div-btn-inCardTaskList">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();
                    getTaskById(task._id);
                  }}
                >
                  Edit
                </Button>

                <Modal centered show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <InputGroup className="mb-3">
                      <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="tugas" placeholder="Tugas" value={tugas} onChange={(e) => setTugas(e.target.value)} autoFocus />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="matkul" placeholder="Matkul" value={matkul} onChange={(e) => setMatkul(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" className="deadline" placeholder="Deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
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
                        updateTask(taskId);
                      }}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button onClick={() => deleteTask(task._id)} className="btn-delete" variant="primary">
                  delete
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListCard;
