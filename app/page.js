"use client";
import React from "react";
import Header from "./components/Header";
import Enroll from "./components/Enroll";
import CourseSection from "./components/CourseSection";

const page = () => {
  return (
    <>
      <Header />
      <Enroll />
      <CourseSection />
    </>
  );
};

export default page;
