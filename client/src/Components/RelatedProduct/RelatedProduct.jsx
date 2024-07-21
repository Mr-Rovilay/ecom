import Item from "../Item/Item"
import "./relatedProduct.css"
import data_product from "/public/data"

const RelatedProduct = () => {
  return (
    <div className="relatedProduct">
        <h1>Related Product</h1>
        <hr />
        <div className="relatedProduct-item">
            {
                data_product.map((item, index )=> {
                    return <Item key={index} id={item.id} image={item.image} name={item.name} new_prices={item.new_price} old_prices={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProduct