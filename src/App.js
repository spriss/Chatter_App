import logo from './logo.svg';
import './App.css';

const App = () => {
  /* fetch(url)
     .then(data=>console.log(data)) */
  return (
    <div className="App">
      <header className="header">
        <img className ="logo" />
        <span className="title">CHATTER!</span>
      </header>
      <footer className="fcd ooter">
        <input className="text-input"/>
        <button className="send">→</button>
      </footer>
    </div>
  );
}

export default App;
