import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Navigasi = () => {
  const expand = 'lg';
  return (
    <>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Container className="navbar-container">
          <Navbar.Brand className="navbar-brand" href="#home">
            MKS Kelas F
          </Navbar.Brand>
          <Navbar.Toggle className="toggle-btn" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
            <Offcanvas.Header className="offCanvas-header" closeButton>
              <Offcanvas.Title className="offCanvas-title" id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanvas-body">
              <div className="offCanvas-navigation">
                <div>
                  <Link className="offCanvas-a" to="/">
                    Home
                  </Link>
                </div>
                <div>
                  <Link className="offCanvas-a" to="/list-tugas">
                    List Tugas
                  </Link>
                </div>
                <div>
                  <Link className="offCanvas-a" to="/jadwal-kelas">
                    Jadwal Kelas
                  </Link>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigasi;
