import React from 'react';
//import logo from './logo.svg';
import './css/App.scss';
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"

function App(){
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
