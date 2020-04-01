import React from 'react';
import { Link } from 'gatsby';

class FooterMenu extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-component">
          <div className="footer-content">
            <ul>
              <li>
                <Link to="cookies">Cookies</Link>
              </li>
              <li>
                <Link to="onas">O nas</Link>
              </li>
              <li>
                <Link to="kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default FooterMenu;
