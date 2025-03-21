import React from "react";
import Item from "./Houseitem";


const House = ()=>{
   return(
    <>
 <div className="house-block">
                <div className="container">
                    <div className="house-inner">
                        <div className="title">
                            <span>
                                Discover Property Types
                            </span>
                            <div className="line"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore
                                et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                        <div className="house-items">
                            <Item name="panta house" image="homeimage/penthouse.png"></Item>
                            <Item name="house" image="homeimage/family-house.png"></Item>
                            <Item name="apartment" image="homeimage/apartment.png"></Item>
                            <Item name="villa" image="homeimage/villa.png"></Item>
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}
export default House;