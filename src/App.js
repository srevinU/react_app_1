import React from "react";
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './style/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      color: 'black'
    }
  }
  changeTheme = (color) => {
    this.setState({theme: color});
  }
  render() {
      return <div className="App">
        <Header theme={this.state.theme}/>
          <Container className='main'>
            <Menu/>
            <Home/>
          </Container>
        <Footer theme={this.state.theme} changeTheme={this.changeTheme}/>
      </div>
    }
}
