"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "@components/Button";
import { annotate } from "rough-notation";

const Match = () => {
  const specs = [
    {
      id: "ux",
      title: "UX",
    },
    {
      id: "ui",
      title: "UI",
    },
    {
      id: "illustration",
      title: "Illustration",
    },
    {
      id: "research",
      title: "Research",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  useEffect(() => {
    const e = document.getElementById("#highlight");
    if (e) {
      setTimeout(() =>(
        annotate(e, {
          type: "highlight",
          color: "#ffda79",
          multiline: true,
        }).show()
        ),2000)
    }
  }, []);
  return (
    <div className="items-center pt-[50px]  max-sm:pt-[60px] max-sm:pb-[100px] flex flex-1 max-sm:flex-col max-lg:flex-col flex-row gap-2 w-full ">
      <div className="w-1/2 max-lg:w-full max-sm:w-full flex flex-col gap-4">
        <p className="font-poppins max-lg:text-3xl max-sm:justify-center leading-normal max-sm:text-4xl text-main w-full max-sm:w-full max-sm:text-center text-5xl font-normal max-sm:flex">
          Find your perfect creative match
        </p>
        <p className="font-inter max-sm:text-start text-main text-[20px]">
          As the world's largest and most far-reaching network of exceptional
          creative professionals, we are fully equipped to handle your most
          critical projects with ease.
        </p>
        <div className="flex flex-row max-sm:flex-col gap-4 max-sm:justify-center items-center">
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
      <div className="w-1/2 max-sm:w-full flex justify-end relative">
        <Image
          src={`/assets/images/hairgirl.jpg`}
          width={`600`}
          height={`500`}
        />
        <div className="absolute max-lg:w-[250px]   max-lg:-bottom-[120px] -bottom-[90px]  flex-col p-[20px] right-0 rounded-[30px] flex box-border bg-[#f8f7f4] shadow-md w-[300px] h-auto">
          <div className="flex flex-row gap-4 items-start">
            <div className="w-[50px] h-auto">
              <Image
                src="/assets/images/mayaealey.jpg"
                className="rounded-3xl"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-[15px] text-main font-extrabold leading-[30px] font-poppins mb-[6px]">
                Maya Ealey
              </p>
              <p className="text-xs text-center font-bold text-main rounded-full px-2 font-montserrat bg-[#ddfde8]">
                Creative Lead
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-4 gap-2">
            <span className="font-bold text-main text-[13px]">Skills</span>
            <div className="flex flex-row flex-wrap gap-2">
              {specs.map((spec) => (
                <div
                  key={spec.id}
                  className={`text-[10px] p-2 ${
                    spec.title === "UI" || "UX" ? "px-3" : ""
                  } border-[1px] font-bold font-montserrat text-main rounded-full`}
                >
                  {spec.title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 pt-4 justify-between">
            <div>
              <p className="tracking-wider leading-normal font-extrabold text-[15px] font-poppins">
                $180/hr
              </p>
            </div>
            <div className="flex flex-row gap-[4px]">
              <Image src={`/assets/icons/star.svg`} width={14} height={15} />
              <Image src={`/assets/icons/star.svg`} width={14} height={15} />
              <Image src={`/assets/icons/star.svg`} width={14} height={15} />
              <Image src={`/assets/icons/star.svg`} width={14} height={15} />
              <Image src={`/assets/icons/star.svg`} width={14} height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
