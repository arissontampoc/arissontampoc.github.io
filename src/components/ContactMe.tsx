import React from 'react';

import { Button } from 'primereact/button';

function linkedInOnClick(e: React.MouseEvent) {
  const url = 'https://www.linkedin.com/in/arissontampoc/';
  window.open(url, "_blank");
}

function emailOnClick(e: React.MouseEvent) {
  window.location.href = 'mailto:arissontampoc@gmail.com';
}

function ContactMe() {
  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <Button 
        icon="pi pi-linkedin"
        text
        rounded
        aria-label="LinkedIn"
        onClick={(e) => linkedInOnClick(e)}
      />
      
      <Button
        icon="pi pi-envelope"
        text
        rounded
        aria-label="E-mail"
        onClick={(e) => emailOnClick(e)}
      />
    </div>
  );
}

export default ContactMe;