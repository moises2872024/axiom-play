import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="not-found-btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound