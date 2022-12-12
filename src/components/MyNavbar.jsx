import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Astronomy Picture of the Day</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" variant="pills" defaultActiveKey="/">
                        <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link className="navButton" as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar