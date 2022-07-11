import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import '../style/Home.css';

export default class Menu extends React.Component {
    render() {
        return (
            <>
                <Container className="home">
                    <Form style={{position:'fixed', display: 'inline-grid', top: '25%', left: '40%', width: '500px'}}>
                        <Form.Group style={{paddingBottom:'30px'}}>
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }

}