import React from "react";
import "./FooterStyle.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
  return (
    <div className="Footer">
      <h2>Entre em contato com a gente!</h2>
      <section className="icones-container">
        <a href="https://facebook.com" rel="noopener noreferrer" target="_blank"><FacebookIcon fontSize="large" className="icones-configuracao" alt="Facebook"/></a>
        <a href="https://instagram.com" rel="noopener noreferrer" target="_blank"><InstagramIcon fontSize="large" className="icones-configuracao" alt="Instagram"/></a>
        <a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><TwitterIcon fontSize="large" className="icones-configuracao" alt="Twitter"/></a>
        <a href="https://gmail.com" rel="noopener noreferrer" target="_blank"><MailOutlineIcon fontSize="large" className="icones-configuracao" alt="Gmail"/></a>
        <a href="https://Linkedin.com" rel="noopener noreferrer" target="_blank"><LinkedInIcon fontSize="large" className="icones-configuracao" alt="Linkedin"/></a>
      </section>
      <h5>NetPlanos direitos reservados© </h5>
    </div>
  );
}

export default Footer;
