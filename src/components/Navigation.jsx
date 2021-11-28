import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navigation = () =>{

    const [toggleMenu, settoggleMenu] = useState(false);

    const handleClick = () => {
        settoggleMenu(!toggleMenu)

    };
    return( 

        <>
        <header>
        <NavLink to="/" className="logo"><span>.</span>Pulto<span>.</span></NavLink>
        <button className="menuToggle" onClick={handleClick}>
                {toggleMenu ? <FaTimes /> : <FaBars />}
        </button>

        <div className={toggleMenu ? "navigation active" : "navigation"}>
            <NavLink exact activeClassName='active_class' to="/" onclick="toggleMenu();">Home</NavLink>
            <NavLink activeClassName='active_class' to="/about" onclick="toggleMenu();">About</NavLink>
            <NavLink activeClassName='active_class' to="/menu" onclick="toggleMenu();">Menu</NavLink>
            <NavLink activeClassName='active_class' to="/expert" onclick="toggleMenu();">Expert</NavLink>
            <NavLink activeClassName='active_class' to="/testimonials" onclick="toggleMenu();">Testimonials</NavLink>
            <NavLink activeClassName='active_class' to="/contact" onclick="toggleMenu();">Contact</NavLink>
        </div>
    </header>
    </>
    )
};

export default Navigation