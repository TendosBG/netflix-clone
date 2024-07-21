import '../styles/Nav.css'
import {useEffect} from "react";

function Nav() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.querySelector(".nav")?.classList.add("nav__black");
                document.querySelector(".nav")?.classList.remove("nav__clear");
            } else {
                document.querySelector(".nav")?.classList.add("nav__clear");
                document.querySelector(".nav")?.classList.remove("nav__black");
            }
        });
    }, []);

    return (
        <div className="nav">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
        </div>
    );
}

export default Nav;