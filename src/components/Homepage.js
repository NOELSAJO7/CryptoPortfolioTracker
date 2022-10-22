import './Homepage.css'
import React from 'react'
import Carousel from './TrackPrice/Carousel';
import Trackprice from './TrackPrice/TrackPrice';

const Homepage = () => {
  return (
    <div className='body'>
      <Carousel/>
      <Trackprice/>
    </div>
  )
}

export default Homepage
