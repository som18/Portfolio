import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedIIcon from "@material-ui/icons/LinkedIn";
// import  EmailIcon  from '@material-ui/icons/Email';
import "../styles/Footer.css";

function footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://www.instagram.com/__sombuddhabiswas__/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
            </a>
            <a href="https://twitter.com/Sombuddha1456" target="_blank" rel="noopener noreferrer">
            <TwitterIcon/>
            </a>
            <a href="https://www.facebook.com/sombuddha.arka" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sombuddha-biswas-858740244/" target="_blank" rel="noopener noreferrer">
            <LinkedIIcon/>
            </a>

        </div>
        <p> &copy; 2024 Sombuddha Biswas <br/>
            Email : sombuddhabiswas09525@gmail.com
         </p>
      
    </div>
  )
}

export default footer
