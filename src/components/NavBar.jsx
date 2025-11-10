import { Link } from 'react-router'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-gamepad"></i>
          <h1>Axiom Play</h1>
        </Link>
        
        <div className="navbar-widgets">
          <div className="dropdown">
            <button 
              className="navbar-toggler dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/category/smartphones">Smartphones</Link></li>
              <li><Link className="dropdown-item" to="/category/laptops">Laptops</Link></li>
              <li><Link className="dropdown-item" to="/category/fragrances">Fragrances</Link></li>
              <li><Link className="dropdown-item" to="/category/beauty">Beauty</Link></li>
              <li><Link className="dropdown-item" to="/category/furniture">Furniture</Link></li>
              <li><Link className="dropdown-item" to="/category/groceries">Groceries</Link></li>
            </ul>
          </div>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar