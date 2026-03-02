import React from 'react';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ServiceCards from './components/ServiceCards/ServiceCards';
import About from './components/About/About';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <About />
        <CTA />
      </main>
    </div>
  );
}

export default App;
