
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  const url1 = "https://res.cloudinary.com/dzghua4dz/image/upload/v1714483076/alex/ojxr9qoq9nluhiryfwha.jpg";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={url1} className='pic1' alt='pic'/>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <span className='span1'>#</span>ale<span className='span-x'>x</span>ander<span className='span-s'>s</span>korobogatov {}
        </p>
          {/* <p><button>enter</button></p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
    </div>
  );
}

export default App;
