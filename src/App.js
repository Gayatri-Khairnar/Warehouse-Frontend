import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { Home } from './components/Home';
import { Weather } from './components/Weather';
import { Navigationbar } from './components/Navigationbar';
import { MyCarousel } from './components/MyCarousel';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import {AboutUs} from '../src/components/AboutUs';
import {ContactUs} from '../src/components/ContactUs';
import { Rules } from './components/Rules';
import Login from './components/Login';
import WarehousePage from './components/WarehousePage';
import RegistrationForm from './components/Registration';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <BrowserRouter>
    <Navigationbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/warehouses' element={<WarehousePage/>}/>
        <Route path='/registration' element={<RegistrationForm/>}/>
        <Route path='/userprofile' element={<UserProfile  userId={1}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;