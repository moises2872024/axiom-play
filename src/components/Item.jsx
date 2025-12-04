import { Link } from 'react-router'

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.images} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="item-price">${product.price}</p>
      <p className="item-description">{product.description.substring(0, 60)}...</p>
      <Link to={`/item/${product.id}`} className="item-detail-btn">
        Ver detalle
      </Link>
    </div>
  )
}

export default Item