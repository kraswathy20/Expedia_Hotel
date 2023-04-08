import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HotelCards({hoteldata}) {
  return (
    <>
    <Link to={`/View-Hotels/${hoteldata.id}`} style={{textDecoration:"none"}}>   
       <Card id='cal' style={{ width: "18rem" }}>
        <Card.Img variant="top" src={hoteldata.Photograph} style={{height:"200 px"}}/>
        <Card.Body>
          <Card.Title className="text-center border"><strong>{hoteldata.name}</strong></Card.Title>
          <Card.Text className="text-center">
            <p><strong>Address : {hoteldata.address1}</strong></p>
            <p><strong>City : {hoteldata.city}</strong>   <strong>Country : {hoteldata.countryCode} </strong></p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>

    </>
  );
}

export default HotelCards;
