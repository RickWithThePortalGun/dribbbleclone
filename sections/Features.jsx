import React from "react";

const Features = () => {
  return (
    <div className="">
      <div className="font-poppins w-2/3 max-lg:text-3xl leading-normal max-sm:text-4xl text-main text-5xl font-normal max-sm:flex">
        A better way to hire designers
      </div>
      <div className="flex flex-1 max-lg:flex-col flex-row gap-4 justify-between pt-[40px]">
        <div>
          <p className="text-main font-bold text-[15px]">
            The #1 job board for design talent
          </p>
          <p className="py-4 text-[15px]">
            Get your job listings in front of millions of top-rated designers
            looking for their next role with an average of 1.1K targeted clicks
            per month.{" "}
          </p>
        </div>
        <div>
          <p className="text-main font-bold text-[15px]">
            Seamless designer search filters
          </p>
          <p className="py-4 text-[15px]">
            No more sifting through piles of resumes. Our advanced search &
            filtering options make it easy to find the right designer in just a
            few clicks.
          </p>
        </div>
        <div>
          <p className="text-main font-bold text-[15px]">Top-quality Candidates </p>
          <p className="py-4 text-[15px]">
            Your brand deserves only the best. Engage with leading designers and
            save your favorite candidates for future projects – all in one
            place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
