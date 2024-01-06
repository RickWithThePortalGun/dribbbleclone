import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-12 flex flex-row gap-4 items-center justify-between h-full w-full bg-gray-100">
      <div className="py-4 px-2 ">
        <Image src="/assets/icons/dribble.svg" width={76} height={30} />
      </div>
      <div className="flex flex-row gap-8 font-bold w-2/3 text-xs">
        <p>For designers</p>
        <p>Hire talent</p>
        <p>Inspiration</p>
        <p>Advertising</p>
        <p>Blog</p>
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
      </div>
      <div className="text-sm text-gray-500">
        @2023 Dribbble
      </div>
    </div>
  );
};

export default Footer;
