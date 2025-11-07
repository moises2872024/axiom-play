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
        
        <ul className="navbar-categories">
          <li><Link to="/category/smartphones">Smartphones</Link></li>
          <li><Link to="/category/laptops">Laptops</Link></li>
        </ul>
        
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar