import Image from "next/image";
import React, { useState } from "react";

const VideoCard = (props) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
  };

  function mainOne() {
    props.cunt();
  }

  function idleOne() {
    alert("already viewed");
  }

  return (
    <div className="py-10">
      <div className="rounded-2xl bg-gray-900  overflow-hidden shadow-lg max-w-small">
        <div
          id="thebutton"
          className="bg-gradient-to-tl from-purple-900 to-green-500 relative"
          onClick={() => {
            {
              view ? idleOne() : mainOne();
            }

            handleView();
          }}
        >
          <Image
            className="w-full justify-items-center rounded-2xl overflow-hidden object-cover absolute mix-blend-overlay"
            src={
              "https://burst.shopifycdn.com/photos/tablet-coffee.jpg?width=373&format=pjpg&exif=1&iptc=1"
            }
            alt={props.name}
            width={260}
            height={300}
          />
          <div className="p-24 inset-0 flex justify-center items-center">
            {view ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{}</div>
          <p className="text-gray-600 ">{} </p>
        </div>
        <div className="grid grid-flow-col gap-3 pb-2 px-6 mx-8">
          <span className=" bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-bold text-black font-base mb-2 ">
            {props.name}
          </span>
        </div>
      </div>
    </div>
  );
};

//  https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80
export default VideoCard;
