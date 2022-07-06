import React from "react";
import { Container } from "react-bootstrap";
import '../style/Menu.css';

export default class Menu extends React.Component {
    render() {
        console.log(this.props.theme.menu);
        return (
            <>
                <Container className="menu" style={{ backgroundColor: this.props.theme.menu }}>
                </Container>
            </>
        );
    }

}