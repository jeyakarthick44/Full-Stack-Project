import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Product from "./components/Product"
import Products from "./components/Products"
import Signup from "./components/Signup"
import Navbar from "./Navbar"
// import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
