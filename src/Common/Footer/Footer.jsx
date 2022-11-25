import React from "react";
import "./footer.css";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="sipnotech__footer">
      <div className="sipnotech__footer-links">
        <div className="sipnotech__footer-links_logo_about_contact_container">
          <h1 className="sipnotech__footer-links_logo">
            Sipno<span>tech</span>
          </h1>
          <p className="sipnotech__footer-links_logo_about_text">
            Welcome to Sipnotech solutions. We are passionate and creative crew
            thriving towards providing better it solutions for your amazing
            Businesses.
          </p>
          <div className="sipnotech__footer-links_contact_container">
            <div className="sipnotech__footer-links_contact_container_phone_container">
              <h4 className="sipnotech__footer-links_contact_container_phone">
                Contact
              </h4>
              <p className="sipnotech__footer-links_contact_container_phone_number">
                Phone No: 7013003526
              </p>
            </div>
            <div className="sipnotech__footer-links_contact_container_email_container">
              <h4 className="sipnotech__footer-links_contact_container_email">
                Email ID
              </h4>
              <p className="sipnotech__footer-links_contact_container_emailId">
                info@sipnotech.com
              </p>
            </div>
          </div>
          <div className="sipnotech__footer-links_social_container">
            <h4>FOLLOW US ON</h4>
            <div className="sipnotech__footer-links_contact_container_social_icons">
              <BsInstagram />
              <BsFacebook />
            </div>
          </div>
        </div>
        <div className="sipnotech__footer-services_container">
          <h3>SERVICES</h3>
          <li className="sipnotech__footer_li">SEO</li>
          <li className="sipnotech__footer_li">UI/UX Design</li>
          <li className="sipnotech__footer_li">Mobile Design</li>
          <li className="sipnotech__footer_li">Website Design</li>
          <li className="sipnotech__footer_li">Web Development</li>
          <li className="sipnotech__footer_li">Digital Marketing</li>
          <li className="sipnotech__footer_li">Content Writing</li>
        </div>
        <div className="sipnotech__footer-company_container">
          <h3>COMPANY</h3>
          <li className="sipnotech__footer_li">Services</li>
          <li className="sipnotech__footer_li">Feature</li>
          <li className="sipnotech__footer_li">Our Team</li>
          <li className="sipnotech__footer_li">Portfolio</li>
          <li className="sipnotech__footer_li">Blog</li>
          <li className="sipnotech__footer_li">About Us</li>
          <li className="sipnotech__footer_li">Contact Us</li>
        </div>
        <div className="sipnotech__footer-newsletter_container">
          <h3>JOIN A NEWSLETTER</h3>
          <li className="sipnotech__footer_li">Your Email Id</li>
          <input
            className="sipnotech__footer-newsletter_input"
            type="email"
            placeholder="Enter your email id"
          />
        </div>
        <h3 className="sipnotech__footer-careers">CAREERS</h3>
      </div>
    </div>
  );
};

export default Footer;
