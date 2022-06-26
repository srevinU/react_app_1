import React from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import '../style/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" sticky="top">
                    <Container className="content">
                        <Container className="info">
                            <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                        </Container>
                        <Container className="search">
                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>                     
                        </Container>
                    </Container>
                </Navbar>
            </>
        );
    }
}