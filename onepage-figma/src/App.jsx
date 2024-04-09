import React from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import Intro from './components/Intro';
import Introcopy from './components/Introcopy';
import Price from './components/price'
import Undraw from './components/Undraw';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Landingpage />
      <Intro/>
      <Introcopy/>
      <Undraw/>
      <Price/>
      <Footer/>
    </div>
  );
}

export default App;
