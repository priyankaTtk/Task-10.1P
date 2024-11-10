import './Last.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

function Last() {
  return (
    <nav className="footer">
      <div className="container">
        <div className="section">
          <h2>Explore</h2>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="section">
          <h2>Support</h2>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="section">
          <h2>Stay connected</h2>
          <div className="socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Movies 2022</span>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>
    </nav>
  );
}

export default Last;
