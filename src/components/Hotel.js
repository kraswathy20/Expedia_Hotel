import {React,useState,useEffect} from 'react'

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
    <div>Hotel</div>
  )
}

export default Hotel