// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Header from './Comp/Header';
import Characters from './Comp/Characters';


function App() {

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  return (
    <div >
      <Header setText =  {setText}/>
      <Characters   />
    </div>
  );
}

export default App;
