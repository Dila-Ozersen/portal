
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar-wrapper">
        <header className="navbar">
        <Link className="brand" to="/">
            Portal<span>.</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
            <Link to="/#features">Features</Link>
            <Link to="/#security">Security</Link>
            <Link to="/login">Sign in</Link>
        </nav>
        </header>
    </div>
  )
}

export default Navbar
