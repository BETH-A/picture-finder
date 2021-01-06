import React from "react";
import './Footer.css';

function Footer(){

    const currentYear = new Date().getFullYear()


    return(
        <footer>
            <p className="footer">Beth Arnold copyright © {currentYear} </p>
        </footer>
    )
};

export default Footer;