import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/home';
import Projects from './Pages/projects';
import Exerience from './Pages/experience';
import Refrences from './Pages/refrences';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <NavigationBar/>
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
            <a href="https://github.com/RoggeroSpez"><img id="logo" src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-icon.png" alt="https://github.com/RoggeroSpez"/></a>
          </section><small>&copy; All images are owned by their respective owners, including logos and other items</small>
        </footer>
    </div>
    </BrowserRouter>
  );
}
export default App;
