import React from 'react';
import './css/App.scss';
import Navbar from "./components/Navbar.js"
import Welcome from "./components/Welcome.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Experiences from "./components/Experiences.js"

function App(){
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
 