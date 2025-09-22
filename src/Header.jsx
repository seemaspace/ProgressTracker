import { Link } from "react-router-dom";
import compass from './assets/compass.jpg';
import logo_brand from './logo/branding/progresstrackerlogo.png';

function Header(props) {
  return (
    <header className="above-the-fold">
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

            <section className="hero-section">
              <h1 className="hero-heading">Progress Tracker</h1>
              <p className="hero-paragraph">
                The roads taken in your journey will keep <span className="highlight highlight-primary">changing</span>. 
                <br /> 
                <img className='hero-img' src={compass} alt="compass" />
                <br />
                But it helps to always know <span className="highlight highlight-secondary">how far you have come</span> to appreciate the journey.
              </p>
              <Link className="btn btn-secondary" onClick={props.scrollToFeatureSection}>Check Features</Link>        
            </section> 
      
    </header>
  );
}

export default Header;
