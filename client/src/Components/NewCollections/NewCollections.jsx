import Item from "../Item/Item"
import "./newCollections.css"
import new_collection from "/public/new_collections"

const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, index) => {
                return <Item key={index} id={item.id} image={item.image} name={item.name} new_prices={item.new_price} old_prices={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections