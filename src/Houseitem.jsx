import React from "react";

const Item = (props) => {
    return (
        <>
            <div className="house-item">
                <div className="house-item-inner">
                    <div className="house-image">
                        <img src={props.image} alt="" />
                        <div className="image-bg"></div>
                        <div className="house-text">
                            <a href="#">VIEW MORE</a>
                            <div className="blog">
                                <span>{props.name}</span>
                                <div className="line1"></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
                                    odio!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item;