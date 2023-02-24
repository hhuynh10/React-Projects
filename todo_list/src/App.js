import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {useState} from 'react'
import Display from './components/Display';

function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <Form list={list} setList={setList}>
        <Display list={list} setList={setList}/>
      </Form>
    </div>
  );
}

export default App;
