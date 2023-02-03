import React from "react";
import SectionHeading from "../SectionHeading";

const Testimonials = () => {
  return (
    <div id="testimonials" className="relative my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div class="absolute inset-x-0 top-[-64px] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[-100px]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-0 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[40deg] sm:right-[calc(10%-10rem)] sm:h-[42.375rem]"
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
      <SectionHeading heading="Testimonials" />
      <div className="z-40 text-gray-300 md:w-3/5 text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod
        tempor incididunt ut l abore et dolore magna aliqua. Ut enim ad minim v
        eniam.
      </div>

      <div className="grid gris-cols-1 md:grid-cols-2 gap-3 mt-10">
        <div className="z-40 text-gray-300 flex items-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
          eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut enim
          ad minim v eniam, quis nostrud exercitation uecat Lorem ipsum dolor
          sit amet, consectetur adipis cing elit, sed do eiusmod tempor
          incididunt ut l abore et dolore magna aliqua. Ut enim ad minim v
          eniam, quis nostrud exercitation uecat{" "}
        </div>
        <div>
          <img src={"/images/Testi1.png"} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
