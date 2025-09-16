import { Link } from "react-router-dom";
import compass from './assets/compass.jpg';
import logo_brand from './logo/branding/progresstrackerlogo.png';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img className="logo-md" src={logo_brand} alt="brand-logo" />
          </Link>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="btn btn-primary-outline nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="btn btn-primary nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tracker" className="btn btn-primary nav-link">
              Progress Tracker
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
