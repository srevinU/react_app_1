import React from "react";
import '../style/Menu.css';
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { menuSettings } from '../configuration/menu.js'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.menuSettings = menuSettings;
    }
    render() {
        return (
            <>
                <Container className="menu" style={{ backgroundColor: this.props.theme.menu }}>
                    <ButtonGroup className="btn-group-menu">
                        {
                            this.menuSettings.map((element, idx) => (
                                <Button key={idx} id={`btn-${idx}`} className='btn-menu' style={{color: this.props.theme.menu_btn}}>
                                    {element.name}
                                </Button>
                            ))
                        }
                    </ButtonGroup>
                </Container>
            </>
        );
    }

}
