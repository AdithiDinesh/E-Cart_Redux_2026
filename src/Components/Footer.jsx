import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5><b>E-Cart</b></h5>
            <p>Designedvand build with all the love in thw world by the Luminar team with the help of our contributors.</p>
            <p>code liscensed Luminar.docs CC BY 3.0. </p>
             <p> currently v5.3.2.</p>
           
          </Col>

          <Col md={3}>
            <h5><b>Links</b></h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">Wishlist</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Cart</a></li>
            </ul>
          </Col>

           <Col md={3}>
            <h5><b>Guides</b></h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">React</a></li>
              <li><a href="#about" className="text-white text-decoration-none">React Bootstrap</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">React Router</a></li>
            </ul>
          </Col>
          
<Col md={3}>
  <h5><b>Contact Us</b></h5>
  <div className="d-flex">
    <input type="email" placeholder="Email Here"
      className="form-control form-control-sm"/>
    <button className="btn btn-secondary btn-sm ms-2">➜</button>
  </div>
  <div className="mt-3 d-flex gap-3">
    <a href="#" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
    <a href="#" className="text-white"><i className="fa-brands fa-x-twitter"></i></a>
    <a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a>
    <a href="#" className="text-white"><i className="fa-solid fa-envelope"></i></a>
    <a href="#" className="text-white"><i className="fa-solid fa-phone"></i></a>
  </div>
</Col>
</Row>
<b>  <p className="text-center mb-0">
copyright © August 2025 Batch, Daily Cart. Build with React Redux. </p>
</b>
   </Container>
    </footer>
  )
}

export default Footer