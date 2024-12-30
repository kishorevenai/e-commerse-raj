import React from "react";
import aboutus from "../../../assets/aboutus.webp";

const AboutUs = () => {
  return (
    <div className="w-7/12 mx-auto">
      <p className="text-center h1_tertiary font-normal">About Us</p>
      <div className="mt-10">
        <p className="p_0 font-normal text-center mb-5">Our Vision</p>
        <p className="text-center p_4 font-normal">
          Wannabe seeks to provide high-quality gospel resources for believers,
          followers of Christ and Christian organization. Our purpose is to
          reflect our creator through our faith, beliefs and culture through
          different products on this platform We want our resources to spark a
          conversation and spread the gospel in an efficient, yet subtle way. Be
          the disciples He has called us to be.
        </p>
        <div className="w-full h-full mt-10">
          <img src={aboutus}></img>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
