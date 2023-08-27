import React from 'react';

import { Button } from 'primereact/button';
import { Timeline } from 'primereact/timeline';

import ExperienceEvent from './ExperienceEvent';
import experience from '../resources/experience.json';

import arrowheadLogo from '../resources/arrowheadLogo.png';
import cubicLogo from '../resources/cubicLogo.png';
import reflexionHealthLogo from '../resources/reflexionHealthLogo.png';
import Skills from './Skills';
import LicensesAndCertifications from './LicensesAndCertifications';

export interface ExperienceEventDetails {
  index: number;
  icon?: string;
  company: string;
  title: string;
  previousTitles?: string[];
  date: string;
  location: string;
  details?: string;
  visible: boolean;
  setVisible: Function;
}

function Experience() {
  const eventDetails = experience.experiences;

  const customContent = (e: ExperienceEventDetails) => { 
    return (
      <ExperienceEvent experienceEventDetails={e}/>
    );
  };

  const customMarker = (e: ExperienceEventDetails) => {
    const label = "Open Event" + (e.index + 1);
    const altLabel = e.company + " Logo";

    const logo = (icon: string) => {
      switch(icon) {
        case "arrowheadLogo.png":
          return arrowheadLogo;
        case "cubicLogo.png": 
          return cubicLogo;
        case "reflexionHealthLogo.png":
          return reflexionHealthLogo;
        default:
          return;
      }
    };

    return (
      <Button 
        size="small"
        rounded
        outlined
        onClick={() => e.setVisible(true)}
        aria-label={label}
      >
        <img
          alt={altLabel}
          src={logo(e.icon)}
        />
      </Button>
    );
  };
  
  return (
    <div 
      id="experience"
      className="experience">
        <h2>Experience</h2>
        <Timeline
          value={eventDetails}
          align="alternate"
          content={(e: ExperienceEventDetails) => customContent(e)}
          marker={(e: ExperienceEventDetails) => customMarker(e)}
        />      
        
        <LicensesAndCertifications/>
        <Skills/>
    </div>
  );
}

export default Experience;