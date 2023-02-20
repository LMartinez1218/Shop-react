import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="links">
            <Link to="/"> Shop </Link>  
            <Link to="/cart"> 
            <ShoppingCart size={32} />
            </Link>
            </div>
        </div>
    )
}