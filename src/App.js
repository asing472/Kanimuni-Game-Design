import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Navbar from './components/Navbar';
import People from './components/People';
import Footer from './components/Footer';
import Branding from './components/Branding';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <section id="about"><About /></section>
      <section id="register"><Register /></section>
      <section id="people"><People /></section>
      <section id="footer"><Footer /></section>
      <Branding />
      <ScrollButton /> 
    </div>
  );
}

export default App;
