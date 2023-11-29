import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/navBar';
import Home from './Pages/home';
import Projects from './Pages/projects';
import Exerience from './Pages/exerience';
import Refrences from './Pages/refrences';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <div className="content-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Exerience/>}/>
          <Route path="/refrences" element={<Refrences/>}/>
        </Routes>
        </div>
        </body>
        <footer id="footer">
          <section id="social">
            <a href="https://www.linkedin.com/in/roggero-spezialy/"> <img id="logo" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="https://www.linkedin.com/in/roggero-spezialy/"/></a>
            <a href="https://github.com/RoggeroSpez"><img id="logo" src="githublogo.png" alt="https://github.com/RoggeroSpez"/></a>
          </section><small>&copy; All images are owned by their respective owners, including logos and other items</small>
        </footer>
    </div>
    </BrowserRouter>
  );
}
export default App;
