"use client";
import Button from "@components/Button";
import { useEffect, useState } from "react";
import { annotate } from "rough-notation";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Hero = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  useEffect(() => {
    const top = document.getElementById("top");
    anime({
      targets: top,
      backgroundColor: [
        { value: "#90EE90" },
        { value: "#ADD8E6" },
        { value: "#FFC0CB" }, // Start color
        { value: "#ffda79" }, // End color
      ],
      duration: 7000, // Duration of the animation in milliseconds
      easing: "easeInOutSine", // Easing function for a smooth transition
      direction: "alternate", // Alternate between start and end colors
      loop: true, // Loop the animation
    });

    const e = document.querySelector("#hero-text");
    if (e) {
      setTimeout(() => {
        annotate(e, {
          type: "highlight",
          color: "#ffda79",
          multiline: true,
        }).show();
      }, 2000);
    }
  }, []);
  return (
    <div className="flex text-center relative pt-[80px] pb-[80px] gap-4 flex-col justify-center">
      <motion.div
        variants={fadeIn("down", "tween", 0.5, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex items-center max-sm:px-2 justify-center"
      >
        <h1
          id="top"
          className="color_box"
        >
          Over 3 million ready-to-work creatives in our community!
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("tween", 1, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className=""
      >
        <h1 className="hero-text w-1/2">
          Hire the <span  id="hero-text">world’s top</span> creative talent.
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up","tween", 1.5, 0.7)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex justify-center max-sm:px-12"
      >
        <h2 className="text-[20px] max-sm:text-[15px] text-[#0d0c22] text-center font-poppins rounded-full">
          Connect with a community of millions of top-rated designers & agencies
          around the world.
        </h2>
      </motion.div>
      <div className="justify-center pt-[24px] flex">
        <Button
          text="Start Hiring Today"
          style={`p-[20px] max-lg:p-[10px] max-lg:text-[15px] max-sm:p-[12px] max-sm:text-[12px] text-white`}
          hidden={`show`} delay={2}
        />
      </div>
    </div>
  );
};

export default Hero;
