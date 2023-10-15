import React from "react";
import pc from "../pcillustrate.svg";
import Image from "next/image";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex grid grid-cols-1 md:grid-cols-2 p-4 py-6 lg:py-8">
      <div className="justify-center items-center">
        <Image src={pc} height={300} width={300} className="mx-10 my-10" />
      </div>
      <div className="justify-center items-center mx-5 ">
        <h1 className="text-5xl font-semibold flex my-10 ">
          welcome to{" "}
          <span>
            <Image
              src={
                "https://www.unschool.in/static/Unschool%20Logo%20Horizontal%20White%20(1)-a4913f0c391a347aa53acfa994243cb4.png"
              }
              height={150}
              width={170}
              alt="unschool"
            />
          </span>
        </h1>

        <p className="text-3xl font-base">
          Unschool is a platform for students to learn... {""}
          <br />
          <span className="change_content text-4xl "></span>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Header;
