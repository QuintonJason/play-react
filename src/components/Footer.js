import React, { Component } from 'react';
import FooterLink from './FooterLink';

// Stateless React Component
const Footer = () => {
  return  (
    <footer className="dy-footer">
      This is the footer
      <ul>
        <li>
          <a href="loshdgfohuase">something</a>
          <FooterLink />
        </li>
      </ul>
    </footer>
  )
}

export default Footer;