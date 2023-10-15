import React from "react";
import { CourseCard } from "./CourseCard";

const courses = [
  {
    name: "Web Dev",
    href: "https://burst.shopifycdn.com/photos/coding-on-laptop.jpg?width=373&format=pjpg&exif=0&iptc=0",
    link: "/webdev",
    current: true,
  },
  {
    name: "Dev Ops",
    href: "https://burst.shopifycdn.com/photos/startup-desk.jpg?width=373&format=pjpg&exif=0&iptc=0",
    link: "/devops",
    current: false,
  },
  {
    name: "Digital Marketing",
    href: "https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=373&format=pjpg&exif=0&iptc=0",
    link: "/digmarkt",
    current: false,
  },
];

const CourseSection = () => {
  return (
    <div id="courses">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-5xl py-5 font-base text-center justify-center items-center">
          Our Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-center mx-5 my-10 ">
        {courses.map((detail, index) => (
          <CourseCard
            src={detail.href}
            course={detail.name}
            link={detail.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
