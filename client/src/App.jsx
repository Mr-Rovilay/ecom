import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import ShopCategory from "./Pages/ShopCategory"
import LoginSignup from "./Pages/LoginSignup"
import { Footer } from "./Components/Footer/Footer"
import men_banner from "/banner_mens.png"
import women_banner from "/banner_women.png"
import kids_banner from "/banner_kids.png"


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
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App