import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import ShopCategory from "./Pages/ShopCategory"
import LoginSignup from "./Pages/LoginSignup"
import { Footer } from "./Components/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/men" element={<ShopCategory category="men"/>}/>
        <Route path="/women" element={<ShopCategory category="women"/>}/>
        <Route path="/kids" element={<ShopCategory category="kids"/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App