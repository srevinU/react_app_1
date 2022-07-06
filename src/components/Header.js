import React from "react";
import '../style/Header.css';
import { Container, Navbar, Form } from "react-bootstrap";

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg={this.props.theme.header} sticky="top">
                    <Container className="content">
                        <Container className="info">
                            <Navbar.Brand href="#home" style={{ color: this.props.theme.logo }}>MyApp</Navbar.Brand>
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
                        <Container className="profile">
                            {/* To be done */}
                        </Container>
                    </Container>
                </Navbar>
            </>
        );
    }
}