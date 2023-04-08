import React from "react";
import Card from "react-bootstrap/Card";

function HotelCards({hoteldata}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={hoteldata.Photograph} style={{height:"200 px"}}/>
        <Card.Body>
          <Card.Title className="text-center"><strong>{hoteldata.name}</strong></Card.Title>
          <Card.Text className="text-center">
            <p><strong>Address : {hoteldata.address1}</strong></p>
            <p><strong>City : {hoteldata.city}</strong>   <strong>Country : {hoteldata.countryCode} </strong></p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default HotelCards;
