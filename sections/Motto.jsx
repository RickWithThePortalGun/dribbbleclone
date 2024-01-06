import Button from "@components/Button";
import React from "react";

const Motto = () => {
  return (
    <div className="pt-[80px] max-lg:pt-[50px] max-lg:flex-col flex-1 items-center flex max-sm:flex-col flex-row gap-8 w-full ">
      <div className="w-1/2 max-lg:w-full max-sm:w-full">
        <p className="font-poppins max-lg:text-3xl text-main max-sm:text-center text-8xl max-sm:flex max-sm:justify-center max-sm:text-5xl">
          When only the best talent will do.
        </p>
      </div>
      <div className="w-1/2 max-lg:w-full max-sm:pt-[20px] max-sm:w-full
       flex flex-col gap-8">
        <div className="mt-4 max-sm:mt-2 gap-3">
        <p className="leading-loose text-main max-lg:text-[15px] text-[20px]">
          From Ford to Airbnb to Capital One, see why over 60,000 leading brands
          and business builders use Dribbble to attract, engage, and hire their
          best design talent.
        </p>
        </div>
          <div className="max-sm:text-center">
          <Button style={`p-[20px] max-lg:p-[10px] max-lg:text-[15px] max-sm:p-[16px] text-white`} text={`Get started`}/>
          </div>
      </div>
    </div>
  );
};

export default Motto;
