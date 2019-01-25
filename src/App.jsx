import React from 'react';
import Header from './components/Header';
import AboutUs from './components/About Us';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact Us';
import './App.sass';

const App = () => {
  return <div className="App">
      <Header />
      <AboutUs />
      <Team />
      <Gallery />
      <Contact />
    </div>;
}

export default App;