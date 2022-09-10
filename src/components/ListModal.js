import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListCard from './ListCard';

const ListModal = (props) => {
  const [show, setShow] = useState(false);

  const [inputValues, setInputValue] = useState({
    items: [],
    item: '',
  });

  const [matkul, setMatkul] = useState();
  const [tugas, setTugas] = useState();
  const [deadline, setDeadline] = useState();

  const getTugas = (e) => {
    // console.log(e.target.value);
    setTugas(e.target.value);
  };
  const getMatkul = (e) => {
    // console.log(e.target.value);
    setMatkul(e.target.value);
  };
  const getDeadline = (e) => {
    // console.log(e.target.value);
    setDeadline(e.target.value);
  };

  useEffect(() => {
    getInputValues();
    // handleSubmit();
  }, [tugas, matkul, deadline]);

  const getInputValues = () => {
    setInputValue({
      items: [...inputValues.items],
      item: [tugas, matkul, deadline],
    });
  };

  // const [abc, setAbc] = useEffect([]);
  const handleSubmit = () => {
    // getInputValues();
    setInputValue({
      items: [...inputValues.items, inputValues.item],
      item: '',
    });
    // setAbc(JSON.stringify(inputValues));
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  };

  // console.log(abc);

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
        {inputValues.items.map((e, i) => {
          return <ListCard key={i} tugas={e[0]} matkul={e[1]} deadline={e[2]} />;
        })}
        {/* {localStorage.getItem('inputValues')} */}
      </div>
    </>
  );
};

export default ListModal;
