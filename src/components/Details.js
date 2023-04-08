import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function Details({abtdata}) {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h4><strong>Details</strong></h4></Accordion.Header>
          <Accordion.Body>
            {abtdata.shortDescription}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Details;
