import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${product.title}`)
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
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail