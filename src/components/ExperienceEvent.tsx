import React, { useState } from 'react';

import parse from 'html-react-parser';

import { Dialog } from 'primereact/dialog';

import { ExperienceEventDetails } from './Experience';
import arrowheadCard from '../resources/arrowheadCard.png';
import cubicCard from '../resources/cubicCard.png';
import reflexionCard from '../resources/reflexionCard.png'

interface ExperienceEventProps {
  experienceEventDetails: ExperienceEventDetails;
}

function ExperienceEvent(props: ExperienceEventProps) {
  const event  = props.experienceEventDetails;
  const title = event.company;
  const mainSubtitle =
    <>
      {event.title}
      <br />
      {event.date + ' | ' + event.location}
    </>;
  
  const subtitle = 
    <>
      {event.previousTitles && 
        <h5>
          Formerly: {event.previousTitles.map((title) => {
            return title;
          })}
        </h5>
      }
    </>;

  const logo = (icon: string) => {
    switch(icon) {
      case "arrowheadLogo.png":
        return arrowheadCard;
      case "cubicLogo.png": 
        return cubicCard;
      case "reflexionHealthLogo.png":
        return reflexionCard;
      default:
        return;
    }
  };

  const [visible, setIsVisible] = useState<boolean>(false);
  event.visible = visible;
  event.setVisible = setIsVisible;

  const dialogPosition = event.index % 2 === 0 ? 'left' : 'right';
    
  return (
    <div className="experience-event">
      {event.date}
      
      <Dialog
        header={title}
        visible={visible}
        position={dialogPosition}
        onHide={() => setIsVisible(false)}
        style={{ width: '50vw' }}
      >
        <img
          alt={event.company}
          src={logo(event.icon)}
        />

        <h4>{mainSubtitle}</h4>
        {subtitle}
        {event.details && 
          <p>
            {parse(event.details)}
          </p>
        }
      </Dialog>
    </div>
  );
}

export default ExperienceEvent;