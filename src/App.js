import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from 'react-router';
import HomePage from './components/HomePage';
import RegisterCustomer from './components/RegisterCustomer';
import LoginCustomer from './components/LoginCustomer'
import GetProducts from './components/GetProducts';
import CartPage from './components/CartPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/register" element={<RegisterCustomer/>}/>
      <Route path="/login" element={<LoginCustomer/>}/>
      <Route path="/products" element={<GetProducts cart={cart} setCart={setCart}/>}/>
      <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>}/>
    </Routes>
    </>
  );
}

export default App;
