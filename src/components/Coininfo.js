import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chartdata } from '../config/apis';
import { CryptoState } from './CryptoContext';
import {Line} from 'react-chartjs-2';
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import './Coininfo.css';

const Coininfo = ({coin}) => {

  const [historicalData,setHistoricalData]=useState();
  const [days,setDays]=useState();
  const {currency}=CryptoState();

  const fetchHistoricData=async ()=>{
    const{data}=await axios.get(Chartdata(coin.id,days,currency));
    setHistoricalData(data.prices);
    // console.log('days',days)
  }


  useEffect(()=>{
    fetchHistoricData();
    // eslint-disable-next-line
  },[days]);
  let options = {
    elements:{point:{radius:0.9}},
    responsive: true,
     plugins: {
          legend: {
              display: true,
              labels: {
                  color: '#f2f2f2'
              }
          }
        },
    scales: {
       x:{
          ticks: {
             color: "#87a0f5",
          },
       },
       y: {
          ticks: {
             color: "#b3bd4a",
          },
          grid: {
            color: '#e6e6e6'
        }
       }
    }
 };
  
  return (
    <div className='chartbtnloadetc'>
     
      {!historicalData?<div className='CircularProgress'><CircularProgress style={{color:"white"}} thickness={2} size={150}/></div>:
  //  <div>
   <Line
      data={{
        labels:historicalData?.map(coin=>{
        let date = new Date(coin[0]);
        let time=`${date.getHours()}:${date.getMinutes()}`;
      return days===1?time:date.toLocaleDateString();
      }),
      datasets:[
        {
         data:historicalData.map((coin)=>coin[1]),
         label:`Price (Past ${days} Days ) in ${currency}`,
         borderColor:"white",
        },
      ]
      }}
      
      options={
        options
      }
      />
      //</div>
    }


     <select onChange={(e)=>{setDays(e.target.value)}}>
  <option className='option' value='1'>24H</option>
  <option className='option' value='30'>30D</option>
  <option className='option' value='90'>3M</option>
  <option className='option' value='365'>1Y</option>
     </select>

   </div>
  )
}

export default Coininfo;


