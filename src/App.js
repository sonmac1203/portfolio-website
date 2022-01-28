import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Hello from './components/Hello';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Hello />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
