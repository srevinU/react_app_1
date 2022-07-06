import React from "react";
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './style/App.css';
import { themesSettings } from './configuration/themes.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: themesSettings,
    }
  }
  changeTheme = (color) => {
    console.log('color asked', color);
    this.setState(prevState => ({
      themes: {
        ...prevState.themes,
        activeTheme: color
      }
    }));
  }
  render() {
      return <div className="App" style={{ backgroundColor: this.state.themes[this.state.themes.activeTheme].app }}>
        <Header theme={ this.state.themes[this.state.themes.activeTheme] }/>
          <Container className='main'>
            <Menu theme={ this.state.themes[this.state.themes.activeTheme] }/>
            <Home/>
          </Container>
        <Footer theme={ this.state.themes[this.state.themes.activeTheme] } changeTheme={this.changeTheme}/>
      </div>
    }
}
