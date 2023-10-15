import React from "react";
import Image from "next/image";

const enroll = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2" id="about">
      <div>
        <Image
          src={
            "https://dgc4ncvkkwqo2.cloudfront.net/home-1.0/enroll-now-hero-min.webp"
          }
          width={370}
          height={450}
          alt="unschool"
        />
      </div>
      <div className="flex justify-around  items-center onset-0">
        <h2 className="text-black text-5xl font-semibold my-15 mt-20 ">
          80% of all our program graduates get a paid internship or job.
          <span className="text-black text-5xl font-bold">
            its your chance now!!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default enroll;
