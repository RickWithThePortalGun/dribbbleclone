import Image from "next/image";
import React from "react";
import diamond from "@public/assets/icons/diamond.svg";
import why from "@public/assets/images/why.jpg";
import coin from "@public/assets/icons/coin.svg";
import shield from "@public/assets/icons/shield.svg";
const Why = () => {
  return (
    <div>
      <div>
        <p className="hero-text  max-lg:text-5xl max-lg:w-full">
          Why brands choose Dribbble to hire design talent
        </p>
      </div>
      <div className="flex pt-[20px] gap-8 flex-row max-sm:flex-col max-lg:flex-col w-full justify-between items-center">
        <div>
          <div className="w-full ">
            <div className="pb-4">
              <Image src={diamond} />
            </div>
            <span className="font-poppins py-1 mt-4 mb-4 font-bold px-1 bg-[#e6fbfe]">
              World-class talent
            </span>
            <p className="my-6 w-2/3 max-lg:w-full">
              From graphic design to UX/UI, our community is home to the world’s
              leading designers and creative agencies.
            </p>
          </div>
          <div className="w-full">
            <div className="pb-4">
              <Image src={coin} />
            </div>
            <span className="font-poppins py-1 mt-4 mb-4 font-bold px-1 bg-[#e3ebfd]">
              $0 placement fees{" "}
            </span>
            <p className="my-6 w-2/3 max-lg:w-full">
              We make the hiring process as seamless and cost-effective as
              possible, so you can focus on building your business.
            </p>
          </div>
          <div className="w-full">
            <div className="pb-4">
              <Image src={shield} />
            </div>
            <span className="font-poppins py-1 mt-4 mb-4 font-bold px-1 bg-[#edddfb]">
              Global Reach{" "}
            </span>
            <p className="my-6 w-2/3 max-lg:w-full">
              With a network of designers spanning over 170 countries, we make
              it easy to find world-class talent, wherever you are in the world.
            </p>
          </div>
        </div>
        <div className="w-2/3 max-sm:w-full rounded-3xl h-full">
          <Image src={why} alt="Workers talking" className="rounded-3xl max-lg:justify-start h-full" />
        </div>
      </div>
    </div>
  );
};

export default Why;
