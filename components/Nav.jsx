"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Nav = () => {
  const navLinks = [
    {
      id: "find-talent",
      title: "Find Talent",
    },
    {
      id: "inspiration",
      title: "Inspiration",
    },
    {
      id: "learn-design",
      title: "Learn Design",
    },
    {
      id: "go-pro",
      title: "Go Pro",
    },
    {
      id: "jobs",
      title: "Jobs",
    },
  ];
  return (
    <nav className="bg-[#fffffc] max-md:w-full max-w-7xl w-full max-sm:px-2 max-lg:px-1 max-sm:max-w-sm">
      <div className="px-12 max-lg:px-6 max-sm:px-1 py-2 flex justify-between max-sm:justify-between items-center">
        <Image src="/assets/icons/dribble.svg" width={76} height={30} />
        <div className="max-sm:hidden ">
          <ul className="flex text-[10px] justify-evenly font-sans">
            {navLinks.map((link, index) => (
              <motion.li
                variants={fadeIn("left", "tween", 0.1 * index, 1)}
                initial="hidden"
                whileInView="show"
                key={link.id}
                className="p-1 px-2 text-sm"
              >
                {link.title}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="gap-4 p-2 flex flex-row items-center justify-between">
          <span className="text-[12px] font-bold">Log In</span>
          <Button
            style="text-[10px] p-2 text-white font-montserrat font-semibold"
            text="Sign Up"
            delay={0.5}
            hidden={`show`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
