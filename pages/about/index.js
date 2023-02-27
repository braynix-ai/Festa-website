import React from "react";
import {
  ChartPieIcon,
  ChatIcon,
  CloudUploadIcon,
  CogIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  GlobeIcon,
  InboxIcon,
  LockClosedIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PresentationChartBarIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XIcon,
} from "@heroicons/react/outline";
const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // {
  //   name: "Leonard Krasner",
  //   role: "Senior Designer",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  //   twitterUrl: "#",
  //   linkedinUrl: "#",
  // },
  // {
  //   name: "Leonard Krasner",
  //   role: "Senior Designer",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  //   twitterUrl: "#",
  //   linkedinUrl: "#",
  // }
  // More people...
];

const index = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-900">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* <h2 className="text-base font-semibold text-white tracking-wide uppercase">
                About Us
              </h2> */}
              <p className="mt-1 text-4xl font-extrabold   bg-clip-text text-transparent bg-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                About us
              </p>
              <p className="max-w-3xl mt-5 mx-auto text-2xl text-gray-50">
                Create memories that last a lifetime with Festa - your one-stop
                solution for event planning and hosting.
              </p>
              <p className="max-w-6xl mt-5 mx-auto text-lg text-gray-50">
                Our startup is a social media platform for events, designed to
                make event planning and management easier and more enjoyable for
                hosts and attendees alike. We understand the frustrations and
                inefficiencies that come with organizing events.We are committed
                to simplicity and convenience, offering a comprehensive suite of
                event-related services in one place. We go beyond the basics of
                event planning by providing a one-stop solution for planning
                everything from inviting guests and budgeting to finding vendors
                and venues.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white ">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="">
              <div className="relative pt-16 pb-32 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-48"
                />
                <div className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-3 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className=" w-full">
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <InboxIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Our Mission
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            To revolutionize event planning and management with
                            our innovative platform.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                      <div
                        data-aos="fade-left"
                        className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-ll mx-auto lg:absolute lg:left-0 h-80 "
                          src="https://img.freepik.com/free-vector/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg?size=338&ext=jpg&uid=R92091640&ga=GA1.1.21955486.1672632224&semt=sph"
                          alt="Inbox user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Our Vision
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Our vision is to become the go-to platform for
                            inviting people for events and event planning it,
                            providing an all-in-one solution for hosts and
                            attendees worldwide. We aim to simplify and
                            streamline the event planning process, making it
                            accessible to anyone regardless of their budget,
                            experience, or location. Our ultimate goal is to
                            create unforgettable events that bring people
                            together and foster lifelong memories.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                      <div
                        data-aos="fade-right"
                        className=" lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto"
                          src="https://img.freepik.com/free-photo/room-with-flowers_1417-1549.jpg?size=626&ext=jpg&uid=R92091640&ga=GA1.1.21955486.1672632224&semt=ais"
                          alt="Customer profile user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 ">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Our Team
                </h2>
                <p className="text-xl text-gray-300">
                  At our startup, we believe that a strong team is the
                  foundation of any successful business. That's why we've
                  assembled a team of talented individuals with a shared passion
                  for innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
