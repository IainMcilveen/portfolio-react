import React from 'react';
//import logo from './logo.svg';
import './css/App.scss';
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"

function App(){
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
 