import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import Home from './components/Home';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
        <Home />
        <Router>
          <Display path="/people/:id" />
        </Router>
    </div>
  );
}

export default App;
