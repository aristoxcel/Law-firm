import React from "react";
import Banner from "./Banner";
import About from "./About";
import Marquee from "react-fast-marquee";
function Homepage() {
  return (
    <div className="">
      <Marquee className="bg-accent font-bold text-4xl font-playFair text-secondary z-50"> Mohsin Law and Tax House . </Marquee>
      <Banner/>
      
      <About />
    </div>
  );
}

export default Homepage;
