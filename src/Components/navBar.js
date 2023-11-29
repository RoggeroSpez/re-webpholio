import React from "react";
import {NavLink} from "react-router-dom";
import './navBar.css';


const NavBar = () => {
<nav className="navBar">
    <NavLink to="/" className={({isActive}) => (isActive ? 'active' : undefined)}>Home</NavLink>
    <NavLink to="/projects" className={({isActive}) => (isActive ? 'active' : undefined)}>Projects</NavLink>
    <NavLink to="/experience" className={({isActive}) => (isActive ? 'active' : undefined)}>Experience</NavLink>
    <NavLink to="/refrences" className={({isActive}) => (isActive ? 'active' : undefined)}>Refrences</NavLink>
</nav>
}
export default NavBar;