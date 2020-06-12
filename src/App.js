import React from 'react';
import './css/App.scss';
import Navbar from "./components/Navbar.js"
import Welcome from "./components/Welcome.js"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"

function App(){
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
 