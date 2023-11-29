
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './pages'
import Store from './pages/store';
import Servises from './pages/servises';
import Cart from './pages/cart';
import Dashboard from './pages/users/dashboard';
import Profile from './pages/users/profile'
import About from './pages/about';
import AboutUser from './pages/users/aboutUser';
import Header from './components/Header';
import Contect from './pages/contect';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/store' element={<Store />} />
        <Route path='/services' element={<Servises />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/aboutUser' element={<AboutUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
