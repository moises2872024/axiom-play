import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice, updateQuantity } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar tu compra</p>
        <Link to="/" className="cart-empty-btn">
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.images} alt={item.title} />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="cart-item-subtotal">
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button 
              className="cart-item-remove" 
              onClick={() => removeFromCart(item.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
        <div className="cart-actions">
          <button className="cart-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="cart-checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart