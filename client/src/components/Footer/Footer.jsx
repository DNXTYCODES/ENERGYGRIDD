import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer wrapper paddings">
      <div className="footer-container flexColStart innerWidth container">
        {/* Company Information */}
        <div className="footer-about">
          <h3 className="footer-title primaryText">About Us</h3>
          <p className="secondaryText">
            We provide reliable and affordable solar solutions tailored to your
            energy needs. Join us in powering a sustainable future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-title primaryText">Quick Links</h3>
          <ul className="footer-link-list">
            <li>
              <a href="/faq" className="footer-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="/plans" className="footer-link">
                Our Plans
              </a>
            </li>
            <li>
              <a href="/gallery" className="footer-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3 className="footer-title primaryText">Contact Us</h3>
          <p className="secondaryText">Email: info@solarsolutions.com</p>
          <p className="secondaryText">Phone: +234 800 123 4567</p>
          <p className="secondaryText">
            Address: 123 Solar Street, Lagos, Nigeria
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3 className="footer-title primaryText">Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="fb.jpeg" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="x.jpeg" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="ig.jpeg" alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="ld.jpeg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="secondaryText">
          © {new Date().getFullYear()} Solar Solutions. All rights reserved.
        </p>
        <a href="/privacy-policy" className="footer-bottom-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
