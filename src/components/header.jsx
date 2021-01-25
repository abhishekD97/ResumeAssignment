import React, {useState} from "react";

function Header(){
    const [nav, setNav] = useState(false);

    function openNav(e) {
        setNav(!nav);
        nav ? document.getElementById("mySidenav").style.width = "0%"  : document.getElementById("mySidenav").style.width = "100%";
    }

    async function anchorTagAnimation(e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0%";
        const destination = e.target.attributes.destination.value;
        const result = await windowFunction(destination);
        window.location = destination;
    }

    function windowFunction() {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve('resolved');
            }, 500);
          });
    }

    return (
        <header>
            <img className="fafa-xing" src="https://fuego.qodeinteractive.com/wp-content/themes/fuego/assets/img/logo_white.png" alt="light logo"></img>
            <div id="mySidenav" className="sidenav">
            <ul>
            <li data-text="Home"><a name="resume" className="nav-link listAnchor" destination="/resume" onClick={anchorTagAnimation}>Home</a></li>
            <li data-text="Projects"><a name="projects" className="nav-link listAnchor" onClick={anchorTagAnimation} destination="/projects">Projects</a></li>
            <li data-text="Feedback"><a name="feedback" className="nav-link listAnchor" onClick={anchorTagAnimation} destination="/feedback">Feedback</a></li>
            </ul>
            </div>
            <div onClick={openNav} class="box-1 navIcon">
            <div class="btn btn-one">
                <span> {nav?<span>X</span>:<span>MORE</span>} </span>
            </div>
            </div>
            </header>
    );
}

export default Header;