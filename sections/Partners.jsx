'use client'
import React from "react";
import Image from "next/image";
import { fadeIn } from "@utils/motion";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      id: "apple",
      title: "",
      src:"/assets/brands/apple.svg"
    },
    {
      id: "amazon",
      title: "Amazon",
      src:"/assets/brands/amazon.svg"
    },
    {
      id: "facebook",
      title: "Facebook",
      src:"/assets/brands/facebook.svg"
    },
    {
      id: "microsoft",
      title: "Microsoft",
      src:"/assets/brands/microsoft.svg"
    },
    {
      id: "shopify",
      title: "Shopify",
      src:"/assets/brands/shopify.svg"
    },
   
    {
      id: "lyft",
      title: "",
      src:"/assets/brands/lyft.svg"

    }
  ];
  return (
    <div className="flex flex-row items-center justify-evenly w-full gap-4 mt-8 pt-[80px] max-lg:flex-col sm:grid-cols-2">
      <div className="text-main max-sm:text-center sm:justify-center">
        <h1 className="uppercase font-bold text-center justify-center">
          Trusted By
        </h1>
      </div>
      <div className="flex gap-12 flex-wrap justify-center items-center flex-row">
        {partners.map((partner, index)=>(
          <motion.div variants={fadeIn('up','tween',0.2*index,1)} whileInView={`show`} initial={`hidden`} key={index} className="flex items-center gap-2">
          <Image src={partner.src} width={40} height={30}  alt={partner.id}/>
          <p className="font-poppins text-main font-semibold max-sm:hidden">{partner.title}</p>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
