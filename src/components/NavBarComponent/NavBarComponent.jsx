import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CartWidgetComponent } from '../CartWidgetComponent';

export const NavBarComponent = () => {
    const categories = ["Hot beverages", "Cakes"];

    return (
        <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">Naif Café</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            {categories.map(category => (
                                <NavDropdown.Item as={Link} to={`/category/${category.toLowerCase()}`} key={category}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
