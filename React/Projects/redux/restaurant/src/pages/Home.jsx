import React, { useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchRestaurant());
  },[])
  

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