import React, { useState } from "react";

const Contectus = () => {
    return (
        <>
            <div className="contact-main">
                <div className="container">
                    <div className="contact-inner">
                        <div className="contact-left-item">
                            <div className="item-inner">
                                <strong>store information</strong>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="text">
                                            <b>Address:</b>
                                            etrend sport <br />123 street, arizona<br /> 85002 <br />united states
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <b>Email:</b>
                                            <a href="#">dharmikvaghasiya21@gmail.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="text">
                                            <b>Phone:</b>
                                            <a href="#">(123)4567890</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-right-item">
                            <div className="item-inner">
                                <div className="title">
                                    contact us
                                </div>
                                <div className="details">
                                    <div className="subject">
                                        <label for="subject">subject</label>
                                        <select name="city" id="city" className="form-control">
                                            <option value="1">webmaster</option>
                                            <option value="2">customer service</option>
                                        </select>
                                    </div>
                                    <div className="email">
                                        <label for="email">Email address</label>
                                        <input className="form-control" type="email" placeholder="your@email.com"/>
                                    </div>
                                    <div className="file">
                                        <label for="attachment">attachment</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="message">
                                        <label for="subject">subject</label>
                                        <textarea className="form-control" rows="2" cols="30" name="address"
                                            id="address"></textarea>
                                    </div>
                                </div>
                                <div className="sent">
                                    <button>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contectus;