import React from "react";
import Button from "@components/Button";

const CTA = () => {
  return (
    <div className="h-1/2 bg-[#ffda79] p-[120px] text-center">
      <p className="text-[64px] font-source_serif_4">Start Hiring Today</p>
      <p className="py-4">
        Browse Portfolios and engage with top creative talents today!
      </p>
      
      <Button
        text={`Get started now`}
        style="cta-btn text-[12px] max-sm:p-2 text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[4px]"
      />
      <Button
        text={`Learn about hiring`}
        style="cta-btn text-[12px] bg-white text-[#0d0c22] ml-4 max-sm:p-2 hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[4px]"
      />
      <p className="p-10 ">
        Are you a designer ? <span className="underline cursor-pointer">Join Dribbble</span>
      </p>
    </div>
  );
};

export default CTA;
