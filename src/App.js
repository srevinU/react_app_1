import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Container className='main'>
          <Menu/>
          <Home/>
        </Container>
      <Footer/>
    </div>
  );
}


export default App;
