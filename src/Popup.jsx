import React from "react";

const Popup = () => {
    function closePopup() {
        document.getElementById("all-popup").style.display = "none";
    }

    return (
        <>
            <div className="pop-block" id="all-popup">
                <div className="pop-inner">
                    <div className="close" onClick={closePopup}>
                        <a>
                            <img src="../homeimage/fancybox_sprite.png" alt="Close" />
                        </a>
                    </div>
                    <div className="pop-item">
                        <div className="pop-item-inner">
                            <div className="pop-container">
                                <div className="box">
                                    <div className="heading">
                                        <h2>Newsletter</h2>
                                    </div>
                                    <div className="subscribe-inbox">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatum.</p>
                                    </div>
                                    <div className="input-box">
                                        <input type="email" name="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="btn">
                                        <button>Subscribe</button>
                                    </div>
                                    <div className="check-box">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            id="checkbox"
                                        />
                                        <label htmlFor="checkbox">Don't show this popup again</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
