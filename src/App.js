import React from 'react';
import styles from './styles/app.module.css';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className={styles['app']}>
      <Navigation />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
