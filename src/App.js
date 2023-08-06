import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Works from './pages/works';
import Github from './pages/github';
import Home from './pages/home';

function App() {

  const linkStyle ={
    color: `white`,
    textDecoration: 'none'
  
  }


  return (
    <div className="App">
    <Router>
      <div className="nameAndDesignation">
        <div className="links">
          <Link style={linkStyle} to={`/about`}><p>About</p></Link>
          <Link style={linkStyle} to={`/works`}><p>Works</p></Link>     
        </div>

        <Link style={linkStyle} to={`/`}>
        <div className="title">
          <h1 className="name">
            Amit Bhattacharya
          </h1>
          <h3 className="designation">Web Developer</h3>
        </div>
        </Link>

        <div className="moreLinks">
        <Link style={linkStyle} to={`/contact`}><p>Contact</p></Link>
          <Link style={linkStyle} to={`/github`}><p>Github</p></Link>   
        </div>

      </div>


      <div className="content">
        
          <Routes>

          <Route path='/' exact Component={Home}/>
            <Route path='/about' Component={About}/>

              <Route path='/contact' Component={Contact}/>



              <Route path='/works' Component={Works}/>



              <Route path='/github' Component={Github}/>
          </Routes>


      </div>
      </Router>
    </div>


  );
}

export default App;
