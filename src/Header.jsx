import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <>
        <div className="Header-block">
            <div className="header-block">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <div className="header-left-inner">
                                <p>+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-right-inner">
                                <span>English</span>
                                <span>USD</span>
                                <span>My Account</span>
                                <span>0 item</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="menu-block">
                <div className="container">
                    <div className="menu-inner">
                        <div className="logo-item">
                            <div className="logo-item-inner">
                                <div className="menu-icon">
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                                <div className="image">
                                    <img src="homeimage/logo.png" alt=""/>
                                </div>
                                <div className="account-user">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                                <div className="cart0">
                                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item">
                            <ul className="menu-item-inner">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                <Link to={"/Shop"}>Shop</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">jewellery</a>
                                        </li>
                                        <li>
                                            <a href="#">furniture</a>
                                        </li>
                                        <li>
                                            <a href="#">Autoparts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                   <Link to={'/Electronics'}>Electronics</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">mobile</a>
                                        </li>
                                        <li>
                                            <a href="#">camera</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Sports</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">accessories</a>
                                        </li>
                                        <li>
                                            <a href="#">books</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                <Link to={"/Contect"}>Contect</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Header;