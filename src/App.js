import './App.css';
import Navbarhead from'./Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Contact from "./Components/Contact"
import Background from "./Components/Background"
import {Routes,Route } from 'react-router-dom'
// import particlesJS from 'particles.js'

function App() {
  return (
    <>
    <Background></Background>
    
    <main>
      <Routes>
        <Route path = "/" exact element={<><Navbarhead/><Home/></>}/>
        <Route path = "/about" element ={<><About/></>}/>
        <Route path = "/work" element = {<><Navbarhead/><Work/></>}/>
        <Route path = "/contact"  element = {<><Navbarhead/><Contact/></>}/>
       </Routes>
    </main>
    </>
  );
}

export default App;
