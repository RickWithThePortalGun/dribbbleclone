import React from "react";
import Marquee from "react-fast-marquee";

const WorkCarousel = () => {
  const firstRow = [
    {
      id: "1",
      type: "image",
      src: "/assets/images/7.jpg",
    },
    {
      id: "2",
      type: "video",
      src: "/assets/images/6.mp4",
    },
    {
      id: "3",
      type: "image",
      src: "/assets/images/5.jpg",
    },
    {
      id: "4",
      type: "image",
      src: "/assets/images/4.jpg",
    },
    {
      id: "5",
      type: "image",
      src: "/assets/images/3.jpg",
    },
    {
      id: "6",
      type: "image",
      src: "/assets/images/2.jpg",
    },
    {
      id: "7",
      type: "video",
      src: "/assets/images/1.mp4",
    },
  ];
  const secondRow = [
    {
      id: "8",
      type: "image",
      src: "/assets/images/s1.jpg",
    },
    {
      id: "9",
      type: "video",
      src: "/assets/images/s2.mp4",
    },
    {
      id: "10",
      type: "image",
      src: "/assets/images/s3.jpg",
    },
    {
      id: "11",
      type: "image",
      src: "/assets/images/s4.jpg",
    },
    {
      id: "12",
      type: "image",
      src: "/assets/images/s5.mp4",
    },
    {
      id: "13",
      type: "image",
      src: "/assets/images/s6.jpg",
    },
  ];

  return (
    <div className="pt-[60px] max-lg:pt-0 max-sm:pt-0 flex flex-col gap-4">
      <div>
        <Marquee autoFill speed={40} className="p-2 flex gap-2">
          <div className="flex pl-4 rounded-3xl flex-row gap-4 ">
            {firstRow.map((item, index) => (
              <div
                key={index}
                className="w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[200px] shadow-md rounded-2xl"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                    }}
                  />
                ) : (
                  <video
                    autoPlay
                    controls={false}
                    loop
                    src={item.src}
                    type="video/mp4"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="flex items-center justify-center">
        <Marquee autoFill={true} delay={2} speed={40} className="p-2 flex gap-2">
          <div className="flex pl-4 rounded-3xl flex-row gap-4 justify-center items-center">
            {secondRow.map((item, index) => (
              <div
                key={index}
                className="w-[300px] max-sm:w-[200px] max-sm:h-[300px] h-[200px] shadow-md rounded-3xl p-2"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Image ${index + 8}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                    }}
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    controls={false}
                    src={item.src}
                    type="video/mp4"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default WorkCarousel;
