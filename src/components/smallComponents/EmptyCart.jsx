
import EmptyCartImg from "../img/cart/empty-cart.png";


const EmptyCart = () => {
  return (
    <div className='emptyCartRapper'>
      <img src={EmptyCartImg} alt="empty-cart-png"  />
      <h3>Your cart is empty</h3>
      <button>Keep Browsing</button>
    </div>
  )
}

export default EmptyCart