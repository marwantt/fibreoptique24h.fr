import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StickyAction from './components/StickyAction';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyAction />
    </div>
  );
}

export default App;
