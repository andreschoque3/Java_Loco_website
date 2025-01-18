import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Locations from './Pages/Locations/Locations';
import Menu from './Pages/Menu/Menu';
import Checkout from './Pages/Checkout/Checkout';
import Join from './Pages/Join/Join';
import Login from './Pages/Login/Login';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Locations' element={<Locations/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Join' element={<Join/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
