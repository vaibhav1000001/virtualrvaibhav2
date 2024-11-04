import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        initiative development tools.Get started today and turn your imagination
        into impressive reality
      </p>
      <div className="flex justify-center my-10 gap-2 sm:gap-6">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 h-8 w-32 sm:h-12 sm:w-36 sm:text-base text-sm text-center content-center rounded-md hover:scale-105">
          Start for free
        </a>
        <a
          href="#"
          className="h-8 w-32 sm:h-12 sm:w-36 sm:text-base text-sm text-center content-center rounded-md border hover:scale-105">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-evenly">
        <video
          controls
          autoPlay
          loop
          muted
          className="rounded-lg w-[48%] border border-orange-700">
          <source src={video1} />
        </video>
        <video
          controls
          autoPlay
          loop
          muted
          className="rounded-lg w-[48%] border border-orange-700">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
