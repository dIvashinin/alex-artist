
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import InstallationsPage from './components/InstallationsPage';
import SculpturesPage from './components/SculpturesPage';
import ExhibitionsPage from './components/ExhibitionsPage';
import PaintingsPage from './components/PaintingsPage';

function App() {
  const url1 = "https://res.cloudinary.com/dzghua4dz/image/upload/v1714483076/alex/ojxr9qoq9nluhiryfwha.jpg";
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar/>
       <Routes>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* exact means i use app.js as landing page as my project is small */}
        {/* <Route path="/" exact> */}
          {/* <div> */}
        {/* <img src={url1} className='pic1' alt='pic'/> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* <span className='span1'>#</span>ale<span className='span-x'>x</span>ander<span className='span-s'>s</span>korobogatov {} */}
        {/* </p> */}
        {/* </div> */}
        {/* </Route> */}
        <Route path="/paintings" component={PaintingsPage} />
        <Route path="/exhibitions" component={ExhibitionsPage} />
        <Route path="/installations" component={InstallationsPage} />
        <Route path="/sculptures" component={SculpturesPage} />
          {/* <p><button>enter</button></p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
