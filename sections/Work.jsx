import React from "react";
import Button from "@components/Button";

const Work = () => {
  return (
    <div className="flex justify-center items-center px-6 flex-col sm:flex-row gap-8 py-12">
      <div className=" w-full h-fit bg-[#f8f7f4] rounded-xl p-[40px]">
        <h1 className="color_box bg-[#b3fbe3] px-4 py-8">Looking for work?</h1>
        <h1 className="font-poppins text-3xl w-full pt-8">
          Find your next opportunity
        </h1>
        <h1 className="py-4 text-8">
          Browse new design jobs or boost your portfolio to get discovered.
        </h1>
        <div className="flex flex-row gap-4 pt-5 max-sm:justify-center items-center">
          <Button
            text={`Find Work`}
            style="cta-btn text-[12px] max-sm:p-2 text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[4px]"
          />
          <Button
            text={`Get Discovered`}
            style="cta-btn text-[12px] max-sm:p-2 text-main bg-transparent border-[1px] p-[4px]"
          />
        </div>
      </div>
      <div className=" w-full h-fit bg-[#f8f7f4] rounded-xl p-[40px]">
        <h1 className="color_box bg-[#ffabe7] px-4 py-8">Here for inspiration?</h1>
        <h1 className="font-poppins text-3xl w-full pt-8">
        Discover trending designs
        </h1>
        <h1 className="py-4 text-8">
        Browse and save your favorite design projects for endless inspiration.{" "}
        </h1>
        <div className="flex flex-row gap-4 pt-5 max-sm:justify-center items-center">
          <Button
            text={`Create my profile`}
            style="cta-btn text-[12px] max-sm:p-2 text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[4px]"
          />
          <Button
            text={`Browse designs`}
            style="cta-btn text-[12px] max-sm:p-2 text-main bg-transparent border-[1px] p-[4px]"
          />
        </div>
      </div>
      {/* <div className="w-full h-[350px] bg-[#f8f7f4] rounded-xl p-[40px]">
        <h1 className="color_box bg-[#ffabe7]">Here for inspiration?</h1>
        <h1 className="font-poppins text-3xl w-full pt-8">
          Discover trending designs
        </h1>
        <h1 className="py-4 text-8">
          Browse and save your favorite design projects for endless inspiration.{" "}
        </h1>
        <div className="flex flex-row gap-4 pt-5 max-sm:justify-center items-center">
          <Button
            text={`Find Work`}
            style="cta-btn text-[12px] max-sm:p-2 text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[4px]"
          />
          <Button
            text={`Get Discovered`}
            style="cta-btn text-[12px] max-sm:p-2 text-main bg-transparent border-[1px] p-[4px]"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Work;
