import React from 'react';

import { Skeleton } from 'primereact/skeleton';

function Intro() {
  return (
    <div
      id="intro"
      className="intro"
    >
      <div
        className="photo"
      >
        <Skeleton shape="circle" size="12rem"/>
      </div>
      
      <div
        className="info"
      >
        <h1>ARISSON TAMPOC</h1>
        <h5>Senior Software Engineer @ Cubic Transportation Systems</h5>
      </div>
      
    </div>
  );
}

export default Intro;