import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Login/>
        </Container>
      </header>
    </div>
  );
}

export default App;
