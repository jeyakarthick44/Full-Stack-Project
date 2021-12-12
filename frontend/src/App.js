import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Product from "./components/Product"
import Products from "./components/Products"
import Signup from "./components/Signup"
import Navbar from "./Navbar"
// import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'
import Admin from './components/Admin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
