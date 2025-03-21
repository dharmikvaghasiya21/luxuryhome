import React from "react";
import { Link } from "react-router-dom";

const Featured = ()=>{
   return(
    <>
<div className="featured-block">
            <div className="container">
                <div className="featured-inner">
                    <div className="title">
                        <span>featured product</span>
                        <div className="line"></div>
                        <div className="line2"></div>
                    </div>
                    <div className="featured-items">
                        <div className="featured-item">
                            <div className="featured-item-inner">
                                <div className="image">
                                    <img src="homeimage/perspiciatis-unde.jpg" alt=""/>
                                    <div className="product-card">
                                        <a href="#"><i className="fa-solid fa-eye"></i></a>
                                       <Link to={'/Featured'}><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </div>
                                </div>
                                <div className="featured-text">
                                    <a href="#">accusantium dolore</a> <br/>
                                    <span>$224.25 <span>$299.00</span></span>

                                </div>
                            </div>
                        </div>
                        <div className="featured-item">
                            <div className="featured-item-inner">
                                <div className="image">
                                    <img src="homeimage/rem-aperiam.jpg" alt=""/>
                                    <div className="product-card">
                                        <a href="#"><i className="fa-solid fa-eye"></i></a>
                                        <Link to={'/Featured'}><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </div>
                                </div>
                                <div className="featured-text">
                                    <a href="#">rem aperiam</a> <br/>
                                    <span>$224.25 <span>$299.00</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item">
                            <div className="featured-item-inner">
                                <div className="image">
                                    <img src="homeimage/adipisci-velit.jpg" alt=""/>
                                    <div className="product-card">
                                        <a href="#"><i className="fa-solid fa-eye"></i></a>
                                        <Link to={'/Featured'}><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </div>
                                </div>
                                <div className="featured-text">
                                    <a href="#">adipisci velit</a> <br/>
                                    <span>$224.25 <span>$299.00</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="featured-item">
                            <div className="featured-item-inner">
                                <div className="image">
                                    <img src="homeimage/omnis-iste.jpg" alt=""/>
                                    <div className="product-card">
                                        <a href="#"><i className="fa-solid fa-eye"></i></a>
                                        <Link to={'/Featured'}><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </div>
                                </div>
                                <div className="featured-text">
                                    <a href="#">omnis iste</a> <br/>
                                    <span>$224.25 <span>$299.00</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}
export default Featured;