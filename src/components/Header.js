import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
function Header() {
  return (
    <div>
        <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://logos-world.net/wp-content/uploads/2021/02/Expedia-Symbol.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <span className='fs-2'><strong>Expedia</strong></span>
          </Navbar.Brand>
        </Container>
      </Navbar></div>
  )
}

export default Header