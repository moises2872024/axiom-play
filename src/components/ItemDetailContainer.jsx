import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const fetchProduct = new Promise((resolve, reject) => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })

    fetchProduct
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  return (
    <div className="item-detail-container">
      {loading ? (
        <p className="loading">Cargando producto...</p>
      ) : (
        product && <ItemDetail product={product} />
      )}
    </div>
  )
}

export default ItemDetailContainer