import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Details from "./Details";

function HotelView() {
  //    create state
  var [viewdata, setViewdata] = useState([]);

  // api call
  const fetchdata = async () => {
    const result = await fetch("/hotels-data.json");
    result.json().then((data) => {
      setViewdata(data.hotels);
    });
  };

  // function call
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(viewdata);
  const params = useParams();
  // console.log(params.id);

  const hotel = viewdata.find((item) => item.id == params.id);
  console.log(hotel);
  return (
    <>
      {hotel ? (
        <Row>
          <Col id="cal" lg={6} md={6} className="mt-4 ms-4 p-5">
            <img
              src={hotel.Photograph}
              style={{ height: "400px" }}
              className="rounded border-dark"
            ></img>
          </Col>
          <Col id="cal" className="mt-4 ms-4 p-5 text-center">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                <h3>{hotel.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item as="li">{hotel.address1}</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
              {hotel.locationDescription}
              </ListGroup.Item>
              <ListGroup.Item as="li">{hotel.city} {hotel.countryCode} </ListGroup.Item>
              <ListGroup.Item as="li">
                <div className="ms-3 me-3">
                <Details abtdata={hotel}/>
                </div>
                 </ListGroup.Item>
            </ListGroup>
            
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
}

export default HotelView;
