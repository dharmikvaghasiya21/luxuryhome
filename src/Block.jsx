import React from "react";
import Banner from "./Banner";
import House from "./House";
import Luxury from "./Luxury";
import Service from "./Service";
import Featured from "./Featured";
import Client from "./Client";
import Testimonial from "./Testimonial";
import NewsLetter from "./NewsLetter";


const Block = () => {
    return (
        <>
            <Banner />
            <House />
            <Luxury />
            <Service />
            <Featured />
            <Client />
            <Testimonial />
            <NewsLetter />
        </>
    )
}
export default Block;