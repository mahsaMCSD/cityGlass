import React from 'react'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


function CustomToggle({ children, eventKey,sendDatatoParent }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
          sendDatatoParent(eventKey)
    );
    return (
      <div             
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }
export default CustomToggle;
