import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
    <>
        <Row className='mt-2'>
            <Col sm={6} md={4} lg={4} xl={2} className='px-5 py-3'>
                <RestaurantCard/>
            </Col>

        </Row>
        
    </>
  )
}

export default Home