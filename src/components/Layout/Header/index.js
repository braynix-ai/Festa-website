import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import LoginDialog from "../../LoginDialog";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [FeedbackOpen, setFeedbackOpen] = useState("");
  const [text, settext] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [ratings, setRatings] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const navigations = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About Us" },
    { href: "/#vendors", name: "Vendors" },
    { href: "/#manage", name: "Manage Events" },
    { href: "/#contact", name: "Contact Us" },
    { href: "/#testimonials", name: "Testimonials" },
  ];

  return (
    <>
      <Disclosure
        as="nav"
        className="fixed w-[calc(100vw-17px)] z-50 bg-[#0A061D] shadow "
      >
        {({ open }) => (
          <>
            <div className="z-50 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className=" flex items-center space-x-3">
                    {/* <div className="h-10 w-60 border border-gray-400"></div> */}
                    <img src={"/images/logoFinal.png"} className="h-16" />
                  </div>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-5">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigations.map((item, index) => (
                    <a
                      key={index}
                      className={
                        router.pathname === item.href
                          ? "text-white underline underline-offset-4  hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                          : "text-white scroll-smooth hover:text-gray-200 hover:underline underline-offset-4 inline-flex items-center px-1 pt-1 text-sm font-medium"
                      }
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      // setLoginOpen(true);
                      router.push("https:///user.festabash.com/");
                      console.log("shshs");
                    }}
                    className="relative hover:bg-gray-50 hover:bg-opacity-20 inline-flex items-center px-8 h-max my-auto py-1 border border-transparent text-sm font-medium text-white border-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Sign In / Register</span>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigations.map((item, index) => (
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    className="bg-indigo-50 bg-opacity-25 border-indigo-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <button
                  type="button"
                  onClick={() => router.push("https:///user.festabash.com/")}
                  className="relative inline-flex items-center px-8 h-max my-auto py-1 border border-transparent text-sm font-medium text-white border-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Sign In </span>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  );
}
