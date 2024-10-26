import React from 'react';
import './Footer.css';


const Footer = ({ brand, links, socialLinks, copyright, className, ...props }) => {
  return (
    <footer className={`footer py-4 ${className}`} {...props}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {brand && <h5 className="footer-brand">{brand}</h5>}
            {links && (
              <ul className="list-unstyled">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-md-6 text-md-end">
            {socialLinks && (
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            )}
            {copyright && (
              <div className="footer-copyright mt-3">
                <small>{copyright}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
