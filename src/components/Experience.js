import React from "react";
import angular from "../assets/experience/angularlogo.png";
import cpp from "../assets/experience/cpplogo.png";
import csharp from "../assets/experience/csharplogo.png";
import java from "../assets/experience/javalogo.webp";
import reactImg from "../assets/experience/reactlogo.png";
import spring from "../assets/experience/spring logo.png";
import tailwind from "../assets/experience/tailwindlogo.avif";
import js from "../assets/experience/JavaScriptlogo.png";
import html from "../assets/experience/htmlogo.png";

export const Experience = () => {
  const techs = [
    { id: 1, src: angular, title: "Angular", style: "shadow-red-500" },
    { id: 2, src: cpp, title: "C++", style: "shadow-blue-500" },
    { id: 3, src: csharp, title: "C#", style: "shadow-purple-500" },
    { id: 4, src: java, title: "Java", style: "shadow-orange-500" },
    { id: 5, src: reactImg, title: "React", style: "shadow-blue-800" },
    { id: 6, src: spring, title: "Spring", style: "shadow-green-500" },
    { id: 7, src: tailwind, title: "Tailwind CSS", style: "shadow-blue-500" },
    { id: 8, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 9, src: html, title: "HTML", style: "shadow-red-500" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4">These are the technologies i have worked with</p>
        </div>
        <div className="max-w-screen-lg grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div key={id} className={"shadow-md hover:scale-105 duration-200 py-2 rounded-md "+style}>
                <img src={src} className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
