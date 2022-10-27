import React from 'react';
import './Togglecurrency.css';
import { CryptoState } from './CryptoContext';


const Togglecurrency = () => {
// eslint-disable-next-line
    const {currency,Setcurrency}=CryptoState("INR");

    const btnClick=(e)=>{
        Setcurrency(e.target.id);
    }

  return (
    <div>
      <button id="INR" onClick={btnClick}>INR</button>
      <button id="USD" onClick={btnClick}>USD</button>
    </div>
  )
}

export default Togglecurrency
