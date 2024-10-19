import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} FinTrackPro - All Rights Reserved</p>
      <p>Powered by FinTrackPro</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/aristil-mba-pmp/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
