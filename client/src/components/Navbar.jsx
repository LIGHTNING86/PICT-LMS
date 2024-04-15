import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar1() {
  return (
    <>
      <Navbar bg="light" className="text-white bg-opacity-20 shadow-lg">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="../src/assets/unilogo2.png"
              width="60"
              height="60"
              className="d-inline-block align-center"
            />{' '}
            <span className="text-2xl font-bold ml-5">PICT LMS</span>
          </Navbar.Brand>
          <Nav className="me-right text-lg font-bold">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/leavepage">Leave Form</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
