import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center h-48 bg-white dark:bg-gray-800">
      <div className="flex items-center h-full">
        <div className="flex flex-col items-center">
          <p className="text-xl dark:text-gray-300 italic shadow-inner">
            THIS COVID-19 TRACKER WEBSITE IS UNDER DEVELOPMENT
          </p>
          {/* <a
            href="https://impaul.netlify.app"
            target="blank"
            className="italic dark:text-gray-200 text-sm dark:hover:text-gray-400 transition-all"
          >
            Developer ?
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
