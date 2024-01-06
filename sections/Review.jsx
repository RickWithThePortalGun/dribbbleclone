import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <div className="px-[10%] flex flex-row max-sm:flex-col flex-1 items-center gap-6">
      <div className="flex flex-1 flex-col p-[32px] gap-4 border-[1px] border-[#dbdbde] rounded-[16px] max-lg:w-full max-sm:w-full">
        <div className="text-[28px] font-semibold max-sm:text-[16px] max-lg:text-[18px] font-poppins">
          “Dribbble is my go-to for hiring designers. It always provides a
          wealth of quality candidates and instantly builds my pipeline.”
        </div>
        <div className="flex text-[12px] flex-wrap pt-4">
          <Image/>
          <p><span className="font-bold font-poppins tracking-wider">Lee Munroe — </span> Head of design, OneSignal</p>
        </div>
      </div>
      <div className="border-none lg:hidden
       rounded-[16px] p-[32px] bg-transparent flex justify-center items-center">
        <span className="hover:scale-125 hover:rotate-12 transition-transform ease-in-out">
        <Image src={`/assets/icons/onesignal.svg`}  width={80} height={80}/>
        </span>
      </div>
    </div>
  );
};

export default Review;
