import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import logo from '../../assets/images/instagram-logo.svg';

const Header = () => (
  <header className="topbar">
    <div className="container">
      <a href="#" className="topbar__logo">
        <img src={logo} alt="Instagram logo" />
      </a>

      <button type="button" className="topbar__icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  </header>
);

export default Header;
