import items from "../AllDataOfItems";

const FurnituresCategoriesItems = () => {
    const filteredItems = items.filter((item)=> item.category === "furniture")
  return (
    <>
        <div className="proud-container">
            <div className="container">
                <div className="products-grid">
                {filteredItems.map((item) => {
                return (
                    <div className="product normal" key={item.id}>
                        <div className="product-header">
                            <img src={item.img} alt={item.description || "Product image"} />
                        </div>
                        <div className="product-details">
                             <p className="description">{item.description}</p>
                             <p className="item-price">{item.price} $</p>
                        </div>
                    </div>
            );
          })}
                </div>
            </div>
        </div>  
     </>
  )
}

export default FurnituresCategoriesItems