import React from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import '../style/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <>
                <Navbar bg={this.props.theme} sticky="top">
                    <Container className="content">
                        <Container className="info">
                            <Navbar.Brand href="#home" style={{ color: 'white' }}>MyApp</Navbar.Brand>
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