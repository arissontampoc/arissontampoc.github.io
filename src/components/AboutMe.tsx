import React from 'react';

import { Button } from 'primereact/button';

import resume from '../resources/042823AT_Resume.pdf';

function AboutMe() {
  const downloadResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div 
      id="about-me"
      className="about-me">
        <h2>About Me</h2>
        
        <p>
          Hello, my name is Arisson Tampoc! I am currently a Senior Software Engineer at Cubic Transportation Systems with a 
          B.S. in Mathematics-Computer Science from UC San Diego. I am very passionate about problem solving and learning new
          technologies. In my spare time, you can often find me working out, playing with my dogs, and watching movies.
        </p>

        <p>
          Take a look at my resume: 
          <Button
            icon="pi pi-file-pdf"
            size="large"
            text
            rounded
            aria-label="Download Resume PDF"
            onClick={downloadResume}
          />
        </p>
    </div>
  );
}

export default AboutMe;