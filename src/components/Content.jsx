import React from "react";
import CountUp from "react-countup";
import virusLg from "../assets/images/virus-lg.svg";

const Content = ({ totalCases }) => {
  return (
    <div className="flex items-center lg:items-center justify-between pb-10 h-[calc(100vh-7rem)] md::h-[calc(85vh-7rem)] lg:h-[calc(85vh-7rem)]">
      <div className="space-y-7 md:space-y-3 lg:space-y-3 relative z-50 ">
        <div className="dark:text-gray-300 space-y-3">
          <h1 className="text-3xl md:text-5xl lg:text-5xl">
            <span className="hidden md:inline lg:inline">Total Cases:</span>
            <span className="md:pl-3 lg:pl-3 md:inline lg:inline block text-5xl">
              <CountUp
                end={totalCases}
                duration={1.5}
                formattingFn={(totalCases) => totalCases.toLocaleString()}
              />
            </span>
          </h1>
          <div className="flex gap-3 items-center md:hidden lg:hidden">
            <div className="bg-violet-300 w-8 h-2"></div>
            <small className="dark:text-gray-400 italic">Total Cases</small>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-3xlfont-light">
              <span className="hidden md:inline lg:inline">Covid-19 </span>
              Worldwide Status
            </p>
            <p className="font-medium italic text-gray-500">
              As of December 17, 2021
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-light dark:text-gray-300">
            What is Covid-19 ?
          </p>
          <p className="max-w-md text-gray-500 md:text-gray-600 lg:text-gray-600 text-[14px] md:text-base lg:text-base">
            Coronavirus disease (Covid-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people who fall sick with
            COVID-19 will experience mild to moderate symptoms and recover
            without special treatment.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-start lg:items-center gap-2 md:gap-4 lg:gap-4 pb-3">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-300 w-8 h-2"></div>
            <small className="dark:text-gray-400">Active</small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-green-300 w-8 h-2"></div>
            <small className="dark:text-gray-400">Recovered</small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-2 bg-red-300"></div>
            <small className="dark:text-gray-400">Deaths</small>
          </div>
        </div>
      </div>

      <div class="w-[370px] md:w-[360px] lg:w-[360px] md:relative lg:relative md:right-0 lg:right-0 md:bottom-0 lg:bottom-0 absolute right-[-190px] bottom-[-150px] z-0 opacity-30 md:opacity-100 lg:opacity-100">
        <img src={virusLg} alt="" className="w-full rotate" />
      </div>
    </div>
  );
};

export default Content;
