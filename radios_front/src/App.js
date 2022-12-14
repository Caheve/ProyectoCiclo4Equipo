import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Login from './components/login/Login';
import Menu from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Menu/>
        <Container>  
          <Login/>
        </Container>
    </div>
  );
}

export default App;
