import Image from "next/image";
import React from "react";

export function CourseCard(props) {
  console.log(props.link);
  console.log(props.course);
  return (
    <div className="max-w-sm rounded bg-gray-900 overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={props.src}
        width={300}
        height={270}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{props.course}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-row">
        <a href={props.link}>
          <button className="inline-block bg-blue-700 rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Start
          </button>
        </a>
      </div>
    </div>
  );
}
