import logo_linkedin from './logo/socials/logo-linkedin.svg';
import logo_github from './logo/socials/logo-github.svg';

function Footer() {
  return (
    <footer className="footer">
      <section className="socials-section">
        <h4>Connect</h4>
        <ul className="social-links">
          <li className="social-link">
            <a
              href="https://www.linkedin.com/in/seemasp"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <img src={logo_linkedin} alt="linkedin-logo" width="20px"/>
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
              <img src={logo_github} alt="github-logo" width="20px"/>
            </a>
          </li>
        </ul>
      </section>
      <p className="footer-bottom">Made with ❤️️ by Seema</p>
    </footer>
  );
}

export default Footer;
