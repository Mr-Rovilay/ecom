import "./popular.css"
import data_product from "/public/data"
import Item from "../Item/Item"

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, index) => {
                return <Item key={index} id={item.id} image={item.image} name={item.name} new_prices={item.new_price} old_prices={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular