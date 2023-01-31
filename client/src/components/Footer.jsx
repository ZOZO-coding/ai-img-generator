import React from "react";

const Footer = () => {
  return (
    <footer className='w-full flex justify-between items-center bg-white text-gray-800 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <div className="container group flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Yu Zuo Production</p>

        <div className="flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/yu-zuo-pmp%C2%AE-294aa969/"
            target="_blank"
            className="text-gray-800  mr-4"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729V1.729C23.996.774 23.204 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="https://portfolio-website-zozo-coding.vercel.app/"
            target="_blank"
            className="text-gray-800"
          >
            <span className="mr-2 group-hover:bg-gray-700+text-white bg-gray-200 p-2 rounded-md">Portfolio</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
