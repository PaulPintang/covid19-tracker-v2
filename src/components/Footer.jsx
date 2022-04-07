import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center h-48 bg-white dark:bg-gray-900">
      <div className="flex items-center h-full">
        <div className="text-center dark:text-gray-300 ">
          <hr className="w-60 lg:w-96 m-auto border-t-[1px] border-gray-600 opacity-30 pt-8 " />
          {/* <p className="md:text-xl lg:text-xl text-base px-3 dark:text-gray-300 italic shadow-inner text-center">
            THIS COVID-19 TRACKER WEBSITE IS STILL UNDER DEVELOPMENT
          </p> */}
          <div className="text-[14px]">
            <p>Designed by Paul Justine &copy; 2022 </p>
            <p>Built using React.Js</p>
            <small className="text-gray-500 italic">
              more features soon....
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
