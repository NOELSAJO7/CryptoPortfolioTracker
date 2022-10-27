import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Coindata } from '../config/apis';
import { CryptoState } from './CryptoContext';
import './Aboutcoin.css';
import Coininfo from './Coininfo';
import { LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
      "& .MuiLinearProgress-backgroundColorPrimary": {
          backgroundColor: "white",
      },
      "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: "black",
      },
  },
}));

const numberWithcoma=(x)=>{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
} 


const Aboutcoin = () => {

  const {id}=useParams();
  const [coin,SetCoin]=useState();
  const {currency,symbol}=CryptoState();

// console.log(id);
  const fetchCoin=async()=>{
    const {data}=await axios.get(Coindata(id));

    SetCoin(data);

  }

  const classes = useStyles();

useEffect(()=>{
fetchCoin();
});


if(!coin) return <LinearProgress  className={classes.root} style={{backgroundColor:"white"}}/>
    

const desc=coin.description.en.split(". ")

  return (
    <div className='coindata'>
      <div className='logodescription'>
      <div>
      <img src={coin.image.large} alt={coin.name} />
      <div className="rankmcap">
        <div><span>Rank:</span>{coin.market_cap_rank}</div>
        <div><span>Current Price:</span><span>{symbol}</span>{numberWithcoma(coin.market_data.current_price[currency.toLowerCase()])}</div>
        <div><span>Market Cap:</span><span>{symbol}</span>{numberWithcoma(coin.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))} M</div>
      </div>
      </div>
      <div className='coinname'>{coin.name}</div>
      <div 
      dangerouslySetInnerHTML={{ __html: desc[0]}}/>
      <div 
      dangerouslySetInnerHTML={{ __html: desc[2]}}/>
      </div>

      <Coininfo coin={coin}/>
      
    </div>
  )
}

export default Aboutcoin
