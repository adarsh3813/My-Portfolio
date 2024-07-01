import React from "react";
import calculator from "../assets/portfolio/calculatorApp.jpg";
import netflix from "../assets/portfolio/netflixApp.jpg";
import swiggy from "../assets/portfolio/swiggyApp.jpg";
import urlShortener from "../assets/portfolio/urlShortenerApp.jpg";
import weather from "../assets/portfolio/weatherApp.jpg";
import youtube from "../assets/portfolio/youtubeApp.jpg";

const Portfolio = () => {
  const projects = [
    { id: 1, src: calculator },
    { id: 2, src: netflix },
    { id: 3, src: swiggy },
    { id: 4, src: urlShortener },
    { id: 5, src: weather },
    { id: 6, src: youtube },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="max-w-screen-lg grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
          {projects.map(({ id, src }) => {
            return (
              <div key={id} className="flex flex-col justify-center items-center shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
