import React from 'react';

import './App.css';
import 'primeicons/primeicons.css';

import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
function App() {
  return (
    <div className="App">
      <Navigation/>
      <AboutMe/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;
