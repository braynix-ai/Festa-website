import React from "react";

const Hero = () => {
  return (
    <div className="flex-1 flex relative items-center  w-full lg:mt-0">
      <div class="absolute inset-x-0 top-[-64px] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[-64px]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-0 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main className="z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="sm:text-center flex flex-col justify-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-semibold text-white sm:text-5xl ">
            {/* <span className="block xl:block">Welcome to Festa,</span>{" "} */}
            <span className="block text-white xl:inline leading-snug">
              Create memories that last a lifetime with FESTABASH
            </span>
          </h1>
          {/* <h1 className="text-3xl tracking-tight font-semibold text-white sm:text-3xl mt-3">
            <span className="block text-white xl:inline">
              Our one stop solution for event planning and hosting
            </span>
          </h1> */}
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Tired of the hassle and stress that comes with event planning? Look
            no further than Festa, the ultimate event planning solution. Our
            platform is designed to provide a seamless and stress-free
            experience for both hosts and guests.
          </p>
          <div className="flex col-span-1 md:hidden md:justify-end">
            <img className="w-10/12" src="images/hero1.svg" />
          </div>
          <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/about"
                className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#0A061D] shadow-2xl hover:bg-gray-500 md:py-2 md:text-lg md:px-10"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 md:flex md:justify-end">
          <img className="w-10/12" src="images/hero1.svg" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
