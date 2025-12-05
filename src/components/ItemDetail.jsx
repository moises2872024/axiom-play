import { useState } from 'react'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addToCart } = useCart()

  const onAdd = (quantity) => {
    addToCart(product, quantity)
    setQuantityAdded(quantity)
  }

  return (
    <div className="item-detail">
      <div className="item-detail-images">
        <img src={product.images} alt={product.title} className="main-image" />
      </div>
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p className="item-detail-brand">Marca: {product.brand}</p>
        <p className="item-detail-category">Categoría: {product.category}</p>
        <p className="item-detail-description">{product.description}</p>
        <div className="item-detail-rating">
          <span>⭐ {product.rating}</span>
          <span className="item-detail-stock">Stock: {product.stock}</span>
        </div>
        <p className="item-detail-price">${product.price}</p>
        
        {quantityAdded === 0 ? (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        ) : (
          <div className="item-detail-actions">
            <Link to="/cart" className="go-to-cart">
              Ir al carrito
            </Link>
            <Link to="/" className="continue-shopping">
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemDetail