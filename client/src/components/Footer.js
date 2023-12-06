import React from 'react';
import logo from '../assets/logowhite.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="CineMax Logo" />
        </div>
        <div className="footer-info">
          <nav>
            <ul>
              <li>
                <b>Address:</b>
                <p>17 Finch Avenue, Woodlawn Road, Waterloo, N20 PE2.</p>
              </li>
              <li>
                <b>Contact:</b>
                <p>+1 619-909-8900</p>
              </li>
              <li>
                <a href="./helpcenter">Help Center</a>
              </li>
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <p>&copy; CineMax @2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
