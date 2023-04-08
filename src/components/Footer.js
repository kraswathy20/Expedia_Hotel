import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        <Row>
            <Col className='text-center' style={{background:"black",color:"white"}} >
                <p className='mt-4 mb-4'><i> 2023 Expedia, Inc., an </i><strong>Expedia Group company</strong>.<i> All rights reserved.</i></p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer