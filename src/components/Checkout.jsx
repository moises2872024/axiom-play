import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router'

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const order = {
      buyer: formData,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: new Date().toISOString()
    }

    try {
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
      setLoading(false)
    } catch (error) {
      console.error('Error al crear la orden:', error)
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="checkout-success">
        <div className="checkout-success-content">
          <i className="fa-solid fa-circle-check"></i>
          <h2>¡Compra realizada con éxito!</h2>
          <p>Tu número de orden es:</p>
          <p className="order-id">{orderId}</p>
          <button onClick={() => navigate('/')} className="checkout-success-btn">
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito</h2>
        <button onClick={() => navigate('/')} className="cart-empty-btn">
          Ver productos
        </button>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Datos de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Dirección</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="checkout-submit" disabled={loading}>
              {loading ? 'Procesando...' : 'Confirmar compra'}
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Resumen de la orden</h3>
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <span>{item.title} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total:</strong>
            <strong>${getTotalPrice()}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout