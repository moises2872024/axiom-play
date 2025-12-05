import { Link, NavLink } from 'react-router'
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
              <li><NavLink className="dropdown-item" to="/category/gaming laptop">Gaming Laptop</NavLink></li>
              <li><NavLink className="dropdown-item" to="/category/consoles">Consoles</NavLink></li>
              <li><NavLink className="dropdown-item" to="/category/videogames">Videogames</NavLink></li>
            </ul>
          </div>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar