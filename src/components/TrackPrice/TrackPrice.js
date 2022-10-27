import './TrackPrice.css'
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CryptoState } from '../CryptoContext';
import {CoinList} from '../../config/apis'
import {Pagination} from '@material-ui/lab' ;
import { makeStyles } from '@material-ui/core/styles';

const numberWithcoma=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  } 


  const useStyles = makeStyles(() => ({
    pagination: {

      "& .MuiPaginationItem-root":{
        color: "White",
        fontSize:"1em",
        margin:"0.3em"

      }
      
    }
  }));



const Trackprice=()=>{
    const {currency}=CryptoState();
    
    const[coins,setCoins]=useState([]);          //to fetch details of all coins
    const[loading,setLoading]=useState(false);

    const fetchCoins=async()=>{
        setLoading(true)
        const {data}=await axios.get(CoinList(currency));
        // console.log(data);
        setCoins(data);
        setLoading(false);
      }

      const navigate = useNavigate();
// console.log(coins);

    React.useEffect(()=>{
        fetchCoins()
    })
    
    const [search,setSearch]=useState('')     //to search the coins

    // const [coinintable,setCoinintable]=useState(coins)

    // React.useEffect(()=>{

    //     if(search=='')
    //     setCoinintable(coins)
    //     else{
    //         const filteredcoins=coins.filter((coin)=>{
    //             return(
    //                 coin.name.toLowerCase().includes(search)||coin.symbol.toLowerCase().includes(search) 
    //             )
                 
    //           })
    //           setCoinintable(filteredcoins)     
    //     }
    // },[search])


    
    const handleSearch=()=>{
        return coins.filter((coin)=>{
          return (coin.name.toLowerCase().includes(search.toLowerCase())||coin.symbol.toLowerCase().includes(search.toLowerCase()))  
        })
    }



    const [currentPage, setCurrentPage] = useState(1);

    const PageSize=10;  //to set max elements displayed in a page
    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return handleSearch().slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    // console.log(search,handleSearch())



    // ===========================giving error to change pagination colour=====================================
  //   const useStyles = makeStyles((theme) => ({
  //     selected: {
  //         color:'#ffffff',
  //     },
  // }));

  // const classes = useStyles();
  const classes = useStyles();
  // ===========================================================================================================
 
    return(
      <div className="TrackPbody">
      <input type='text' value={search} onChange={(e)=>{
        setSearch(e.target.value)
         }} placeholder="Search for a coin"></input>
        
          <table>
          <tbody>
            <tr>
              <th>COIN</th>
              <th>PRICE</th>
              <th>24HR CHANGE</th>
              <th>MARKET CAP</th>
            </tr>
            {handleSearch().slice((currentPage-1)*PageSize,(currentPage-1)*PageSize+PageSize).map((coin, key) =>{

let isProfit= coin.price_change_percentage_24h>0;
//    console.log(coin)
  let colr='grey';
  if(coin.price_change_percentage_24h>0)
  colr='green';
  else if(coin.price_change_percentage_24h<0)
  colr='red';



              return (
                <tr key={key} onClick={()=>navigate(`/Aboutcoin/${coin.id}`)} >
                  <td>
                    <div className="imagenamesym">
                    <img src={coin.image} alt={coin.name}/>
                    <div><span>{coin.name}</span><span> ({coin.symbol.toUpperCase()})</span></div>
                    </div>
                  </td>
                  <td>{numberWithcoma(coin.current_price)}</td>
                  <td style={{ color:colr
              }}>  {isProfit && '+'}{coin.price_change_percentage_24h.toPrecision(2)} % {isProfit?'↑':' ↓'}</td>
                  <td>{numberWithcoma(coin.market_cap).slice(0,9)}M</td>
                </tr>
              )
            })}
            </tbody>
          </table>

<div>
<div className='pagination'>
<Pagination
classes={{
  ul: classes.pagination
}}
count={parseInt((handleSearch().length/10).toFixed(0))}
onChange={(_,value)=>{
  setCurrentPage(value);
}
}


/>
</div>

</div>
          

        </div>
      );
}

export default Trackprice;













// {handleSearch().map((coin,key)=>{
//   let isProfit= coin.price_change_percentage_24h>0;
// //    console.log(coin)
//   let colr='grey';
//   if(coin.price_change_percentage_24h>0)
//   colr='green';
//   else if(coin.price_change_percentage_24h<0)
//   colr='red';
//   return(
//     <tr key={coin.id}>
// <Link className='rowlink'>
    
//     <td>
      // <div className="imagenamesym">
      //     <img src={coin.image} alt={coin.name}/>
      //         <div><span>{coin.name}</span><span> ({coin.symbol.toUpperCase()})</span></div>
      // </div>    
//     </td>

    

//     <td>{numberWithcoma(coin.current_price)}</td>
//     <td style={{ color:colr
//               }}>  {isProfit && '+'}{coin.price_change_percentage_24h.toPrecision(2)} % {isProfit?'↑':' ↓'}</td>
//     <td>{numberWithcoma(coin.market_cap).slice(0,9)}M</td>
      
//       </Link> 
//       </tr>
//     );
// })}







