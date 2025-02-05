import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.css"
import AddProduct from "../../components/addProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/listproduct" element={<ListProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin