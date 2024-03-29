import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Astronomy Picture of the Day</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" variant="pills" defaultActiveKey="/">
                        <Nav.Link className="px-3" as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link className="px-3" as={NavLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link className="px-3" as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar