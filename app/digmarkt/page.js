"use client";
import React, { useState, useEffect } from "react";
import dmarketing from "../dmarketing.svg";
import Image from "next/image";
import VideoCard from "../components/VideoCard";
import { Fragment } from "react";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";
import GoldMedal from "../components/medal_5.jpg";
import SilverMedal from "../components/OE5ZQ50.jpg";

const video = [
  { name: "video-1" },
  { name: "video-2" },
  { name: "video-3" },
  { name: "video-4" },
  { name: "video-5" },
  { name: "video-6" },
  { name: "video-7" },
  { name: "video-8" },
  { name: "video-9" },
  { name: "video-10" },
];

const Page = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fullCourse, setfullCourse] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpen = () => {
    if (count === 5 || count === 10) setShowModal(true);
  };

  const handleWin = () => {
    if (count === 10) setfullCourse(true);
  };

  useEffect(() => {
    handleWin();
  }, [count]);

  useEffect(() => {
    handleOpen();
  }, [count]);

  useEffect(() => {
    setValue((count / 10) * 100);
  }, [count]);

  return (
    <Fragment>
      <div>
        <div className="max-w-[1320px] mx-auto">
          <div className="items-center justify-center grid lg:grid-cols-2 ">
            <Image
              src={dmarketing}
              height={300}
              width={270}
              alt={dmarketing}
              className="mx-5 my-10"
            />
            <h1 className="text-4xl py-5 font-mono ">
              all the <span className="text-yellow-500"> know how's </span> to
              be a{" "}
              <span className="text-blue-800">master digital marketing </span>..
            </h1>
          </div>
          <div className="flex flex-col items-center gap-[7px]">
            <span>Your Progress</span>
            <ProgressBar value={value} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-center mt-20">
          {/*max-w-[1320px] mx-auto lg:grid-cols-4 md:grid-cols-2 gap-6 py-[15px]*/}
          {video.map((vid, index) => (
            <VideoCard
              name={vid.name}
              key={{ index }}
              cunt={() => {
                setCount(count + 1);
              }}
            />
          ))}
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {fullCourse ? (
          <div className="p-6">
            <Image src={GoldMedal} height={250} width={200} />
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Congrats! for finishing 100% of course
            </h3>
            <p className="mb-5 font-normal text-gray-500">
              "This amazing accomplishment is just one step on your journey.
              Your ability to relentlessly search for solutions to problems and
              find innovative ways to improve the world is the key to this
              success and many to come."
            </p>
          </div>
        ) : (
          <div className="p-6">
            <Image src={SilverMedal} height={250} width={200} />
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Congrats! for finishing 50% of course
            </h3>
            <p className="mb-5 font-normal text-gray-500">
              "This amazing accomplishment is just one step on your journey.
              Your ability to relentlessly search for solutions to problems and
              find innovative ways to improve the world is the key to this
              success and many to come."
            </p>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default Page;
