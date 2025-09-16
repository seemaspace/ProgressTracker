import logo_linkedin from './logo/socials/logo-linkedin.svg';
import logo_github from './logo/socials/logo-github.svg';
import logo_brand from './logo/branding/progresstrackerlogo.png';

function Footer() {
  return (
    <footer className="footer">
      <section className="socials-section">

        <img className="logo-sm" src={logo_brand} alt="brand-logo" />
        <h4>Connect</h4>

        <ul className="social-links">
          <li className="social-link">
            <a
              href="https://www.linkedin.com/in/seemasp"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <img className='social-icons' src={logo_linkedin} alt="linkedin-logo" />
            </a>
          </li>
          <li className="social-link">
            <a
              href="https://github.com/seemaspace"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img className='social-icons' src={logo_github} alt="github-logo" />
            </a>
          </li>
        </ul>
      </section>
      <p className="small-text footer-bottom">Made with ❤️️ by Seema</p>
    </footer>
  );
}

export default Footer;
