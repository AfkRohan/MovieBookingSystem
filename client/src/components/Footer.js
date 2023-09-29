
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="bg-primary textxlarge textwhite flex justify-between footersize p2 mt10">
        <p>&copy; {new Date().getFullYear()} CineMax</p>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
