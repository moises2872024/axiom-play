import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { getTotalQuantity } = useCart()
  const totalQuantity = getTotalQuantity()

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <button className="cart-button">
          <i className="fa-solid fa-cart-shopping"></i>
          {totalQuantity > 0 && (
            <span className="cart-notification">{totalQuantity}</span>
          )}
        </button>
      </Link>
    </div>
  )
}

export default CartWidget