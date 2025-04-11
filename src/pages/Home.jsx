import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[url(/background.png)] bg-cover bg-center px-4 py-10">
        {/* Header Image */}
        <img
          src="/header.png"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          alt="Header"
        />

        {/* Rick & Morty Logo */}
        <img
          src="/rickandmorty.png"
          className="w-full max-w-[250px] sm:max-w-md md:max-w-lg my-6"
          alt="Rick and Morty"
        />

        {/* Navigation Text */}
        <div className="w-full flex flex-col gap-6 sm:flex-row sm:gap-8 text-xl sm:text-3xl md:text-4xl font-luckiest justify-center items-center text-center">
          <Link
            to="/characters"
            className="px-6 py-3 pt-5  bg-black text-green-400 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-black shadow-[0_0_15px_#0f0] hover:shadow-[0_0_25px_#0f0] transition-all duration-300"
          >
            Characters
          </Link>

          <a
            to="/episodes"
            className="px-6 py-3 pt-5 hover:cursor-not-allowed  bg-black text-purple-400 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-black shadow-[0_0_15px_#a855f7] hover:shadow-[0_0_25px_#a855f7] transition-all duration-300"
          >
            Episodes
          </a>

          <a
            to="/locations"
            className="px-6 py-3 pt-5 bg-black hover:cursor-not-allowed text-blue-400 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-black shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
          >
            Locations
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
