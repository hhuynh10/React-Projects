import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" default element={<Home /> } />
          <Route path="/home/view/:id" default element={<View /> } />
          <Route path="/home/edit/:id" default element={<Edit /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
