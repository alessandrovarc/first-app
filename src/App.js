import logo from './logo.svg';
import './App.css';
//questa sintassi all'interno del return della function che è simile ad HTML si chiama JSX
//tutti gli attributi che in html erano class diventano className
// le variabili si "incastrano" più facilmente basta le mettere le {}
import NewComponent from './components/NewComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import ButtonComponent from './components/ButtonComponent';
import { useState } from 'react';
import ImageComponent from './components/ImageComponent';

 
const myName = 'alessandro'

function App() {
  const [count, setCount] = useState(0);

  
  const addNumber = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <CustomNavbar/>
      <header className="App-header">
        <ImageComponent img ="https://placedog.net/500" description="cane"/>
        {/* <h1>primo compenente React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <NewComponent  randomName = "alessandro" cssClass="text-yellow"/>
        <NewComponent randomName = "franci" cssClass="text-pink"/>
        <NewComponent randomName = "achi"  cssClass="text-blue"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.{myName}
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonComponent textButton="Ale-app"/>
        </a>
        <ButtonComponent textButton="Aggiungi + 1" onClick={() => addNumber()} />
        <div> io sono lo stato count: {count}</div>

      </header>
    </div>
  );
}

export default App;
