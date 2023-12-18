"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";
import { useEffect, useState } from "react";
import { annotate } from "rough-notation";

const Connecting = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  const [highlight, setHighlight] = useState(false)
  useEffect(() => {
    const e = document.querySelector(".highlight");
    if (e) {
      setTimeout(() => {
        annotate(e, {
          type: "highlight",
          color: "#ffda79",
          multiline: true,
        }).show();
      }, 2000);
      setHighlight(false);
    }
  }, [highlight]);
  useEffect(() => {
    const e = document.getElementById("highlight");
    if (e) {
      setTimeout(() => {
        annotate(e, {
          type: "underline",
          color: "#b3fbe3",
          multiline: true,
        }).show();
      }, 2000);
    }
  }, []);
  
  return (
    <div className="flex text-center relative pt-[80px] gap-12 flex-col justify-center">
      <motion.div
        variants={fadeIn("down", "tween", 0.5, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex items-center max-sm justify-center"
      >
        <h1 className="text-[16px] bg-[#ffda79] max-sm:text-[12px] inline-block justify-center font-source_serif_4 font-medium py-2 text-[#3d3d4e] max-sm:px-2 max-sm:py-1 rounded-full px-4">
          Trusted by top brands & businesses
        </h1>
      </motion.div>
      <div className="">
        <motion.h1 variants={fadeIn("tween",0.5, 0.5)} whileInView={()=>{setHighlight(true)}} initial={`show`}  className="hero-text  max-lg:text-5xl max-lg:w-full
         w-1/2">
          <span className="highlight" >Connecting </span> brands and business builders with the <span id="highlight" >world’s top designers</span>{" "}
        </motion.h1>
      </div>
      <motion.div
        variants={fadeIn("tween", 0, 0.5)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex justify-center max-sm:px-12"
      >
        <h2 className="text-[20px] w-2/3 font-light max-sm:w-full max-sm:text-[20px] text-[#0d0c22] text-center font-inter">
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </h2>
      </motion.div>
    </div>
  );
};

export default Connecting;
