import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import '../style/Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" fixed="bottom">
                    <Container className="footer">
                    </Container>
                </Navbar>
            </>
        );
    }
}