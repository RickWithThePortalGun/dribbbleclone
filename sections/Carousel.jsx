import React from "react";
import Marquee from "react-fast-marquee";

const Carousel = () => {
  const images = [
    {
      id: "biggie",
      src: "/assets/images/Biggie.png",
      name: "James Anderson",
      job: "Lead Designer",
      tag: {
        tag1: "Brand",
        tag2: "Illustration",
      },
    },
    {
      id: "jeremy",
      src: "/assets/images/Jeremy.jpg",
      name: "Dan Mall",
      job: "Design Educator",
      tag: {
        tag1: "Brand",
        tag2: "UI",
        tag3: "Web",
      },
    },
   
    {
      id: "Yoshi",
      src: "/assets/images/Yoshi.jpg",
      name: "Victa Wille",
      job: "Principal Designer",
      tag: {
        tag1: "Design",
        tag2: "Product",
        tag3: "UX",
      },
    },
    {
      id: "illustration",
      src: "/assets/images/Illustration.png",
      name: "Mercedes Bazan",
      job: "Illustrator",
      tag: {
        tag1: "Product",
        tag2: "UI/UX",
      },
    },
    {
      id: "blackwoman",
      src: "/assets/images/blackwoman.png",
      name: "Helen Tran",
      job: "Design Director",
      tag: {
        tag1: "Product",
        tag2: "UX",
      },
    },
  ];
  return (
    <div className="pt-[60px] max-lg:pt-0 max-sm:pt-0">
      <Marquee speed={40} autoFill={true} className="p-2 flex gap-2">
        <div className="flex pl-4 rounded-3xl flex-row gap-4 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[400px] shadow-md rounded-3xl p-2"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-black max-sm:-bottom-[65%] -bottom-[70%] left-0 relative bg-transparent w-auto rounded-3xl h-[100px] ">
                <div className="flex px-2 absolute bottom-12 flex-col">
                  <p className="text-white font-inter">{image.name}</p>
                  <p className="text-white font-bold text-[12px]">
                    {image.job}
                  </p>
                </div>
                <div className="flex absolute bottom-2  px-2 flex-row gap-2 ">
                  <div className=" text-center text-white text-[12px] rounded-full border-[1px]">
                    <p className="px-2 py-1 ">{image.tag.tag1}</p>
                  </div>

                  <div className="px-2 py-1 text-[12px] text-white flex justify-center items-center rounded-full border-[1px] border-white bg-transparent">
                    {image.tag.tag2}
                  </div>
                  {image.tag.tag3 && (
                    <div className="px-2 py-1 text-[12px] text-white flex justify-center items-center rounded-full border-[1px] border-white bg-transparent">
                      {image.tag.tag3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
