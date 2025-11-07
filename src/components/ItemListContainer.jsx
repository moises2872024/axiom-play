import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const fetchProducts = new Promise((resolve, reject) => {
      const url = categoryId 
        ? `https://dummyjson.com/products/category/${categoryId}`
        : 'https://dummyjson.com/products'
      
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data.products))
        .catch(err => reject(err))
    })

    fetchProducts
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div className="item-list-container">
      {greeting && <h2>{greeting}</h2>}
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer