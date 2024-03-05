import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="#">AbdeRaouf</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="skills">Skills</Nav.Link>
                        <Nav.Link href="SSAcontact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}