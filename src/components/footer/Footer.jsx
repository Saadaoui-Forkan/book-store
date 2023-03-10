import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import '../../App.css'

function Footer() {
  let date =  new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-telegram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/authors" className="footer-link">Authors</Link>
            <Link to="/about"  className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Tunisia - Mednine - ElGuattar St
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@Forkan.com
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Saadaoui_Forkan ?? <span>{date}</span> All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer