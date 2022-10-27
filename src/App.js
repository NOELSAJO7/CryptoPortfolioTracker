import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutcoin from './components/Aboutcoin';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/Aboutcoin/:id' element={<Aboutcoin/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
