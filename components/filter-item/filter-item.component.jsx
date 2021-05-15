import React from 'react'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


function CustomToggle({ children, eventKey,sendDatatoParent,sendDatatofromsecondChild}) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
          sendDatatoParent(eventKey),
          sendDatatofromsecondChild
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