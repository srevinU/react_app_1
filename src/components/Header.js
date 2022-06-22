import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                            <Nav className="me-auto">
                            {
                                /*
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#home2">Features</Nav.Link>
                                <Nav.Link href="#home3">Pricing</Nav.Link>
                                */
                            }

                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>                     
                            
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}