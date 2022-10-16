import { BrowserRouter,Route } from 'react-router-dom'
import './App.css';
import Trackprice from './components/TrackPrice/TrackPrice';
import Navbar from './components/Navbar';
import Aboutcoin from './components/Aboutcoin';
import Carousel from './components/TrackPrice/Carousel';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>

          <Navbar/>
          {/* <Carousel/> */}
          <Homepage/>
          {/* <Route exact path='/' element={<Trackprice/>}/>
          <Route exact path='/coin:id' element={<Aboutcoin/>}/> */}
          {/* <Trackprice/> */}
    
    </BrowserRouter>
    
  );
}

export default App;
