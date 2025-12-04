import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItems, getItemsByCategory } from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const fetchProducts = new Promise((resolve, reject) => {
      const getData = categoryId ? getItemsByCategory(categoryId) : getItems()
      
      getData
        .then(data => resolve(data))
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