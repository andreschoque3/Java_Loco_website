import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Locations from './Pages/Locations/Locations';
import Menu from './Pages/Menu/Menu';
import Checkout from './Pages/Checkout/Checkout';
import Join from './Pages/Join/Join';
import Login from './Pages/Login/Login';


function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Locations' element={<Locations/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Join' element={<Join/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
