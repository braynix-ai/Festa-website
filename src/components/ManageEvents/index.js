import React from "react";
import SectionHeading from "../SectionHeading";

const ManageEvents = () => {
  return (
    <div
      id="manage"
      className="relative mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8"
    >
      <div class=" absolute inset-x-0 top-[-64px] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[200px]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-0 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[70deg] sm:right-[calc(10%-10rem)] sm:h-[42.375rem]"
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
      <SectionHeading heading={"Manage your own events"} />
      <div className="text-gray-300 text-center text-lg">
        Create, Update and Manage events all on a signle platform.
      </div>
      <div className="z-50 mt-10 grid grid-cols-1 md:grid-cols-2 gap-3  text-white">
        <div className=" flex flex-col justify-center">
          <div className="text-2xl font-bold tracking-wide">
            Amplify Event Engagement
          </div>
          <div className="mt-2 md:w-4/5">
            Connect, Share, and Interact with Attendees through Social Media
            feed
          </div>
        </div>
        <div className="h-72 flex justify-center md:space-x-3">
          <img className="h-full w-auto" src={"/images/m0.png"} />
        </div>
        <div className="z-50 h-72 hidden md:flex justify-center md:space-x-3">
          <img className="h-full w-auto" src={"/images/m1.png"} />
        </div>
        <div className=" flex flex-col justify-center">
          <div className="text-2xl font-bold tracking-wide">
            Preserve Precious Moments
          </div>
          <div className="mt-2 md:w-4/5">
            Effortlessly Capture and Share Event Memories with Integrated Photo
            Sharing
          </div>
        </div>
        <div className="z-50 h-72 flex md:hidden justify-center md:space-x-3">
          <img className="h-full w-auto z-50" src={"/images/m1.png"} />
        </div>
        <div className=" flex flex-col justify-center">
          <div className="text-2xl font-bold tracking-wide">
            Streamline Event Organization
          </div>
          <div className="mt-2 md:w-4/5">
            Coordinate Budgets and Guest Lists with Ease
          </div>
        </div>
        <div className="h-72 flex justify-center md:space-x-3">
          <img className="h-full w-auto" src={"/images/m3.png"} />
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
