import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center h-48 bg-white dark:bg-gray-900">
      <div className="flex items-center h-full">
        <div className="text-center dark:text-gray-300 ">
          <hr className="w-60 lg:w-96 m-auto border-t-[1px] border-gray-600 opacity-30 pt-8 " />
          <div className="text-[14px]">
            <p>
              Designed by
              <a
                href="https://paulpintang.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer px-[4px] hover:text-[#FD0037] transition-all"
              >
                Paul Justine
              </a>
              &copy; 2022
            </p>
            <p>Built using React.Js</p>
            <small className="text-gray-500 text-[12px] italic">
              more features soon...
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
