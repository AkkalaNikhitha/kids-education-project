import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";  
import Gallery from "./Gallery";
import Pages from "./Pages";
import Joinclass from "./Joinclass";
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

function App() {
    return(
     <Router>
       <div className="grid">
         <div className="head">REACT DEVELOPER</div>
         <ul className="nav">
           <li><Link to='/'>home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
           <li><Link to='/gallery'>Gallery</Link></li>
           <li><Link to='/pages'>Pages</Link></li>
           <li><Link to='/joinclass'>Joinclass</Link></li>
         </ul>

       </div>

       <Routes>

         <Route path="" element={<Home />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/gallery" element={<Gallery />}></Route>
         <Route path="/pages" element={<Pages />}></Route>
         <Route path="/joinclass" element={<Joinclass />}></Route>
       </Routes>

     </Router>

    )
  }

export default App;
