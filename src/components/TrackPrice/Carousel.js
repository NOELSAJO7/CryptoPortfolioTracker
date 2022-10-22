import './Carousel.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import {CoinList} from '../../config/apis'; 
import { CryptoState } from '../CryptoContext';

const handleDragStart = (e) => e.preventDefault();

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
   },[currency])


  

   const Items=trending.map((coin)=>{

    let isProfit= coin.price_change_percentage_24h>0;
    
    let colr='grey';
    if(coin.price_change_percentage_24h>0)
    colr='green';
    else if(coin.price_change_percentage_24h<0)
    colr='red';

    return(
      <Link className='link'>
      <div className='carouselitem'>
          <img src={coin.image} alt={coin.name}/>
              <div className='gold'>{coin.symbol.toUpperCase()}</div><div style={{ color:colr
              }}>  {isProfit && '+'}{coin.price_change_percentage_24h.toPrecision(2)} % {isProfit?'↑':' ↓'}</div>
          <div className='gold'>{symbol}{numberWithcoma(coin.current_price)}</div>
      </div>
      </Link>  

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











// {
//   "id": "bitcoin",
//   "symbol": "btc",
//   "name": "Bitcoin",
//   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//   "current_price": 1584074,
//   "market_cap": 30394889472630,
//   "market_cap_rank": 1,
//   "fully_diluted_valuation": 33280464196902,
//   "total_volume": 2950078641243,
//   "high_24h": 1634957,
//   "low_24h": 1581433,
//   "price_change_24h": -12756.34174357308,
//   "price_change_percentage_24h": -0.79885,
//   "market_cap_change_24h": -216550899489.4961,
//   "market_cap_change_percentage_24h": -0.70742,
//   "circulating_supply": 19179200,
//   "total_supply": 21000000,
//   "max_supply": 21000000,
//   "ath": 5128383,
//   "ath_change_percentage": -69.09778,
//   "ath_date": "2021-11-10T14:24:11.849Z",
//   "atl": 3993.42,
//   "atl_change_percentage": 39584.88882,
//   "atl_date": "2013-07-05T00:00:00.000Z",
//   "roi": null,
//   "last_updated": "2022-10-14T19:20:20.228Z"
// },
// {
//   "id": "ethereum",
//   "symbol": "eth",
//   "name": "Ethereum",
//   "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
//   "current_price": 107170,
//   "market_cap": 12959543024659,
//   "market_cap_rank": 2,
//   "fully_diluted_valuation": null,
//   "total_volume": 1001105705614,
//   "high_24h": 110027,
//   "low_24h": 105585,
//   "price_change_24h": 1090.09,
//   "price_change_percentage_24h": 1.02761,
//   "market_cap_change_24h": 138746638207,
//   "market_cap_change_percentage_24h": 1.0822,
//   "circulating_supply": 120925460.915243,
//   "total_supply": 120948270.494634,
//   "max_supply": null,
//   "ath": 362338,
//   "ath_change_percentage": -70.39997,
//   "ath_date": "2021-11-10T14:24:19.604Z",
//   "atl": 28.13,
//   "atl_change_percentage": 381156.86578,
//   "atl_date": "2015-10-20T00:00:00.000Z",
//   "roi": {
//     "times": 89.37690243314336,
//     "currency": "btc",
//     "percentage": 8937.690243314335
//   },
//   "last_updated": "2022-10-14T19:20:33.490Z"
// },
// {
//   "id": "tether",
//   "symbol": "usdt",
//   "name": "Tether",
//   "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
//   "current_price": 82.45,
//   "market_cap": 5641246145823,
//   "market_cap_rank": 3,
//   "fully_diluted_valuation": null,
//   "total_volume": 3500687077303,
//   "high_24h": 82.61,
//   "low_24h": 81.71,
//   "price_change_24h": 0.1107,
//   "price_change_percentage_24h": 0.13445,
//   "market_cap_change_24h": 12318785574,
//   "market_cap_change_percentage_24h": 0.21885,
//   "circulating_supply": 68422459806.6999,
//   "total_supply": 68422459806.6999,
//   "max_supply": null,
//   "ath": 91.22,
//   "ath_change_percentage": -9.61789,
//   "ath_date": "2018-07-24T00:00:00.000Z",
//   "atl": 36.86,
//   "atl_change_percentage": 123.68044,
//   "atl_date": "2015-03-02T00:00:00.000Z",
//   "roi": null,
//   "last_updated": "2022-10-14T19:16:34.392Z"
// },