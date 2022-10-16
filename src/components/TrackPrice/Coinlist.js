import React, { useState } from 'react'
import { CoinList } from '../../config/apis';
const numberWithcoma=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  } 

const Coinlist = () => {

    const[coins,setCoins]=useState([]);
    const[loading,setLoading]=useState(false);

    const fetchCoins=async()=>{
        const {data}=await axios.get(CoinList(currency));
        console.log(data);
        setCoins(data);
      }



  return (
    <div>
      
    </div>
  )
}

export default Coinlist
