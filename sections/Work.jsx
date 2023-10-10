import React from "react";
import Button from "@components/Button";

const Work = () => {
  return (
    <div className="flex justify-center items-center max-sm:flex-col gap-8">
      <div className="shadow-md w-[50%] max-sm:w-[80%] h-[350px] bg-[#f8f7f4] rounded-xl p-[40px]">
        <h1 className="color_box bg-[#b3fbe3] pb-4">Looking for work?</h1> 
        <h1 className="font-poppins text-3xl w-[50%] pt-8">Find your next opportunity</h1>
        <h1 className="">
        Browse new design jobs or boost your portfolio to get discovered.
        </h1>
        <div className="flex flex-row max-sm:flex-col gap-4 pt-10 max-sm:justify-center items-center">
          <Button
            text={`Find a designer`}
            style="cta-btn text-[12px] text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[24px]"
          />
          <Button
            text={`Learn about hiring`}
            style="cta-btn text-[12px] text-main bg-transparent border-[1px] p-[24px]"
          />
        </div>
      </div>
      <div className="shadow-md w-[50%] max-sm:w-[80%] h-[350px] bg-[#f8f7f4] rounded-xl p-[40px]">
      <h1 className="color_box bg-[#ffabe7]">Here for inspiration?</h1> 
      </div>
    </div>
  );
};

export default Work;
