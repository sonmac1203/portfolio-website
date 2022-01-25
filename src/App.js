import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Hello from './components/Hello';
import Projects from './components/Projects';
import { Container } from 'reactstrap';

function App() {
  return (
    <main>
      <NavBar />
      <Hello />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
