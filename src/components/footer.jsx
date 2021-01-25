// eslint-disable-next-line
import React from "react";

function Footer()
{
    const D = new Date().getFullYear();
    return(
        <footer className="footerN">
            <br/>
            <br/>
            <br/>
            <img className="footerBrand" src="https://fuego.qodeinteractive.com/wp-content/themes/fuego/assets/img/logo_white.png" alt="light logo"></img>
            <br/>
            <br/>
            <br/>
            <p><a href="https://www.facebook.com/abhishek.dolli"><img className="footerIcon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/122_Facebook_F_logo_logos-256.png" alt="Footer Icon"/></a><a href="https://github.com/abhishekD97"><img className="footerIcon" src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/github-240.png" alt="Footer Icon"/></a><a href="https://www.linkedin.com/in/abhishek-dolli-0526b4196/"><img className="footerIcon" src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-256.png" alt="Footer Icon"/></a></p>
            <p className="copyright"> Copyright © {D} by Abhishek VD </p>
        </footer>
    );
}

export default Footer;