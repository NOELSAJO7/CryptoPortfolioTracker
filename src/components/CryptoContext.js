import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const Crypto = createContext();

const CryptoContext = ({children}) => {

    const [currency,Setcurrency]=useState('INR')
    const [symbol,Setsymbol]=useState('₹')


    useEffect(()=>{
        if(currency==="INR")
        Setsymbol('₹')
        else
        Setsymbol('$')

        // console.log(symbol)
    },[currency])


  return (
    <Crypto.Provider  value={{currency,symbol,Setcurrency}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState=()=>{

    return useContext(Crypto);
}
