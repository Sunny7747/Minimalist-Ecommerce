import items from "../AllDataOfItems";
import "./allItems.css"

const AllCategoriesItems = () => {
  return (
    <>
    <div className="proud-container">
        <div className="container">
            <div className="products-grid">
            {items.map((item) => {
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
  );
};

export default AllCategoriesItems;