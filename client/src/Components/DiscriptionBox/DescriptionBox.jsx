import "./descriptionbox.css"

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
       <div className="descriptionBox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio repellendus quas corrupti tempora itaque id neque, ad voluptatum dolorum. Suscipit porro quis saepe repudiandae voluptatibus eius in velit expedita.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque in soluta, doloremque repudialoribus commodi veritatis saepe asperiores vel ut?</p>
      </div>
      <div className="descriptionBox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
     
    </div>
  )
}

export default DescriptionBox