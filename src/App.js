import logo from './logo.svg';
import './App.css';
//questa sintassi all'interno del return della function che è simile ad HTML si chiama JSX
//tutti gli attributi che in html erano class diventano className
// le variabili si "incastrano" più facilmente basta le mettere le {}
import NewComponent from './components/NewComponent';

const myName = 'alessandro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>primo compenente React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <NewComponent  randomName = "alessandro" cssClass="text-yellow"/>
        <NewComponent randomName = "franci" cssClass="text-pink"/>
        <NewComponent randomName = "achi"  cssClass="text-blue"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.{myName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ale app
        </a>
      </header>
    </div>
  );
}

export default App;
