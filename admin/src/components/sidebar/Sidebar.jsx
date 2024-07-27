import {Link} from 'react-router-dom'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <img src="/Product_Cart.svg" alt="" />
        <p className="">Add product</p>
        </div> 
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <img src="/Product_list_icon.svg" alt="" />
        <p className="">Product List</p>
        </div> 
        </Link>
    </div>
  )
}

export default Sidebar