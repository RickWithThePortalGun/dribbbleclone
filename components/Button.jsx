'use client'
import React from "react";
import { delay, motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Button = ({ text, style, delay, hidden }) => {
  return (
    <motion.span variants={fadeIn("up", "tween", delay,1)} whileInView={`show`} initial={hidden}>
      <button className={`rounded-full ${style} bg-[#0d0c22] `}>
        {text}
      </button>
    </motion.span>
  );
};

export default Button;
