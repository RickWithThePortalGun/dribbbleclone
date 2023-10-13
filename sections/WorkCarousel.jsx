import React from "react";
import Marquee from "react-fast-marquee";

const WorkCarousel = () => {
  const firstRow = [
    {
      id: "",
      type: "image",
      src: "/assets/images/7.jpg",
    },
    {
      id: "",
      type: "video",
      src: "/assets/images/6.mp4",
    },
    {
      id: "",
      type: "image",
      src: "/assets/images/5.jpg",
    },
    {
        id: "",
        type: "image",
        src: "/assets/images/4.jpg",
      },
      {
        id: "",
        type: "image",
        src: "/assets/images/3.jpg",
      },
      {
        id: "",
        type: "image",
        src: "/assets/images/2.jpg",
      },
      {
        id: "",
        type: "image",
        src: "/assets/images/1.mp4",
      },
  ];
  const secondRow = [
    {
      id: "",
      type: "image",
      src: "/assets/images/s1.jpg",
    },
    {
      id: "",
      type: "video",
      src: "/assets/images/s2.mp4",
    },
    {
      id: "",
      type: "image",
      src: "/assets/images/s3.jpg",
    },
    {
        id: "",
        type: "image",
        src: "/assets/images/s4.jpg",
      },
      {
        id: "",
        type: "image",
        src: "/assets/images/s5.mp4",
      },
      {
        id: "",
        type: "image",
        src: "/assets/images/s6.jpg",
      },
  ];


  return (
    <div className="pt-[60px] max-lg:pt-0 max-sm:pt-0 flex flex-col gap-4">
      <div>
        <Marquee speed={40} play={false} className="p-2 flex gap-2">
          <div className="flex pl-4 rounded-3xl flex-row gap-4 ">
            {firstRow.map((item, index) => (
              <div
                key={index}
                className="w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[200px] shadow-md rounded-2xl"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="p-1 w-full max-sm:w-[200px] max-sm:h-[300px] h-full overflow-hidden border-0 object-cover rounded-2xl">
                  <video
                    playsInline
                    preload="auto"
                    muted
                    loop
                    autoPlay
                    className="aspect-auto overflow-clip object-contain w-full"
                    src={item.src}
                    width="260"
                    height="200"
                  ></video>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="flex items-center justify-center">
        <Marquee speed={40} play={false}  className="p-2 flex gap-2">
          <div className="flex pl-4 rounded-3xl flex-row gap-4 justify-center items-center">
            {secondRow.map((item, index) => (
              <div
                key={index}
                className="w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[200px] shadow-md rounded-3xl p-2"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="p-1 w-full max-sm:w-[200px] max-sm:h-[300px] h-full overflow-hidden border-0 object-cover rounded-2xl">
                  <video
                    playsInline
                    preload="auto"
                    muted
                    loop
                    autoPlay
                    className="aspect-auto overflow-clip object-contain w-full"
                    src={item.src}
                    width="260"
                    height="200"
                  ></video>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default WorkCarousel;
