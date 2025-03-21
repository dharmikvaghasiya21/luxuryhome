import React from "react";
const NewsLetter = ()=>{
   return(
    <>
<div className="NewsLetter-block">
            <div className="container">
                <div className="NewsLetter-inner">
                    <div className="NewsLetter-item-left">
                        <div className="NewsLetter-item-inner">
                            <div className="NewsLetter-image">
                                <img src="homeimage/address-bg.png" alt=""/>
                                <div className="NewsLetter-text">
                                    <div className="logo">
                                        <img src="homeimage/address-blog-logo.png" alt=""/>
                                    </div>
                                    <p>Exact <b/>
                                        15 Main Rd E. St Albans VIC 1234 <br/>
                                        United States</p>
                                    <p><span>phone:</span>+1 234 567 890</p>
                                    <p><span>Email:</span>sales@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="NewsLetter-item-right">
                        <div className="NewsLetter-item-inner">
                            <div className="title">
                                <span>Sign Up For NewsLetter</span>
                                <div className="line"></div>
                            </div>
                            <div className="address">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio minima quo
                                    natus
                                    vero quas ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                                    esse?</p>
                                <input type="email" name="email" id="email" placeholder="your email address"/>
                                <a href="#"><button onclick="email();">Subscribe</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}
export default NewsLetter;