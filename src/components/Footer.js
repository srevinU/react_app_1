import React from "react";
import { Container, Navbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import '../style/Footer.css';
import '../configuration/themes'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 0,
            radioButtons: [
                { action: 'light', variant: 'light', icon: <BsFillSunFill/>, value: 0 },
                { action: 'dark', variant: 'dark', icon: <BsMoonStarsFill/>, value: 1 }
            ],
            changeTheme: props.changeTheme
        };
      }
    render() {
        return (
            <>
                <Navbar bg={this.props.theme.footer} fixed="bottom">
                    <Container className="footer">
                        <ToggleButtonGroup type="radio" name="radio">
                            {this.state.radioButtons.map((radio, idx) => (
                                <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                variant={idx % 2 ? 'light' : 'dark'}
                                value={radio.value}
                                checked={this.state.radioValue === radio.value}
                                onChange={(e) => this.setState({radioValue: e.currentTarget.value})}
                                onClick={() => this.state.changeTheme(radio.variant)} 
                                >
                                {radio.icon}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>      
                    </Container>
                </Navbar>
            </>
        );
    }
}