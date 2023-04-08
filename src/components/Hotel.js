import {React,useState,useEffect} from 'react'
import HotelCards from './HotelCards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hotelanim.css'

function Hotel() {
    // state to hold data from api
    var [hotelList,setHotel]=useState([])

    // function to call api

    const fetchData=async()=>{
       const result=await fetch('/hotels-data.json')
       result.json().then(
        data=>{
            setHotel(data.hotels)
        }
       )
    }
    console.log(hotelList);
    // function call
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row>
        {
            hotelList.map(item=>(
                <Col id='cal' lg={4} md={6} className="mt-4 p-5">
                <HotelCards hoteldata={item}/>
                </Col>
            ))
        }
    </Row>
  )
}

export default Hotel