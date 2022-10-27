import './Carousel.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import {CoinList} from '../../config/apis'; 
import { CryptoState } from '../CryptoContext';

// const handleDragStart = (e) => e.preventDefault();

// ============================================================

const numberWithcoma=(x)=>{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
} 

// ============================================================

const Carousel = () => {

  const {currency}=CryptoState();
  const {symbol}=CryptoState();
  const [trending,Settrending]=useState([]);
  
// ================================================================
  const fetchTrendingCoin=async()=>{
    const {data}=await axios.get(CoinList(currency));
    // console.log(data);
    Settrending(data);
  }
// =================================================================


  // console.log('trending',trending);
   useEffect(()=>{
    fetchTrendingCoin();
   },[])


   const navigate=useNavigate();
  

   const Items=trending.map((coin)=>{

    let isProfit= coin.price_change_percentage_24h>0;
    
    let colr='grey';
    if(coin.price_change_percentage_24h>0)
    colr='green';
    else if(coin.price_change_percentage_24h<0)
    colr='red';

    return(
      <div className='carouselitem' onClick={()=>navigate(`/Aboutcoin/${coin.id}`)}>
          <img src={coin.image} alt={coin.name}/>
              <div className='gold'>{coin.symbol.toUpperCase()}</div><div style={{ color:colr
              }}>  {isProfit && '+'}{coin.price_change_percentage_24h.toPrecision(2)} % {isProfit?'↑':' ↓'}</div>
          <div className='gold'>{symbol}{numberWithcoma(coin.current_price)}</div>
      </div>
    )
    
   })

  //  console.log('items--->',trending);

   const responsive={
    0: {
        items: 3,
    },
    1024: {
        items: 5
    }
  }

  return (
    <AliceCarousel 
    mouseTracking 
    infinite
    autoPlayInterval={1000}
    animationDuration={1500}
    responsive={responsive}
    disableButtonsControls
    disableDotsControls
    autoPlay
    items={Items} />
  );
}

export default Carousel;

