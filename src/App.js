import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Pages/Profile/Profile';
import Products from './components/Pages/Products/Products';
import ProductItem from './components/Pages/Product_each_item/ProductItem';
import Cart from './components/Pages/Cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductItem />} />
            <Route path="/products/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
