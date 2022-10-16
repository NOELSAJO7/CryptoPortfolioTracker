import React, { useState } from 'react';
import axios from 'axios';
import { CryptoState } from '../CryptoContext';
import {CoinList} from '../../config/apis'

const numberWithcoma=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  } 

const Trackprice=()=>{
    const {currency}=CryptoState();
    
    const[coins,setCoins]=useState([]);
    const[loading,setLoading]=useState(false);

    const fetchCoins=async()=>{
        const {data}=await axios.get(CoinList(currency));
        console.log(data);
        setCoins(data);
      }

    
    React.useEffect(()=>{
        axios.get(CoinList(currency)).then((response)=>{
            setCoins(response.data);
            // console.log(coins);
        }).catch((error)=>{console.log(error);})
    },[currency])
    

    return(
        <>
        </>
    );
}

export default Trackprice;