import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
      <div className="row pt-5">
{/* duplicate column according to products */}
<div className="col-3">

    {/* cards */}
      <Card>
      <Card.Img style={{height:"250px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NcludHAxXy0qXNVUy8ErN2F-JkIfxfivTO8GQZV-wg&s=10" />
      <Card.Body className='text-center'>
        <Card.Title>PERFUME</Card.Title>
        <Link to={`/products/:id`} className='btn btn-secondary'>View More</Link>
      </Card.Body>
    </Card>

</div>
      </div>
    </div>
  )
}

export default Products
