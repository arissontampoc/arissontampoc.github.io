import React from 'react';

import './App.css';
import 'primeicons/primeicons.css';

import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navigation from './components/Navigation';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Intro/>
      <AboutMe/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;
