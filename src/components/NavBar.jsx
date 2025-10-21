import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <i className="fa-solid fa-gamepad"></i>
          <h1>Axiom Play</h1>
        </div>
        
        <ul className="navbar-categories">
          <li><a href="#accion">Acción</a></li>
          <li><a href="#aventura">Aventura</a></li>
          <li><a href="#deportes">Deportes</a></li>
          <li><a href="#rpg">RPG</a></li>
        </ul>
        
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar