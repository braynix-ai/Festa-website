/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "What is the product and why do I need it?",
    answer:
      "We are a one stop solution to all your event management problems and now you can seamlessly plan and manage your event with us. We provide a set of services for which you used different apps, did a lot of research and hardwork, etc. in this single platform. You need our app to simplify the complex process and to make the task significantly easy for yourselves so that you can enjoy the event you so much care about. We are here to help you to plan, create and share memories with your loved ones in a better way.",
  },
  {
    question: "How do you charge for services?",
    answer: "We are absolutely free for the customers.",
  },
  {
    question: "What kind of events can be planned?",
    answer:
      "Any event ranging from weddings to corporate events or birthdays to baby showers.",
  },
  {
    question: "What is included in event planning services?",
    answer:
      "We do not plan the event for you, we provide you a platform to simplify the complex procedure you've to go through while planning and managing an event. We provide you with the data of Event Managers who can help you plan your event but we are not responsible for their service or any misconduct, we just provide you with the data, you can verify and be confident about them after contacting them and looking at their profile and portfolio.",
  },
  {
    question:
      "If there’s an emergency, can we change the date or details of the event created?",
    answer:
      "Yes, you can edit your created event at any given time by clicking on the specific event in the 'Created Events' section in the home screen.",
  },
  {
    question: "Do you have any vendor reference or partnership?",
    answer:
      "We have vendors listed on our platform but we do not take any responsibility for their services, actions or behavior as we simply provide you with a list of vendors based on your needs and you can choose from the various after being confident in them by contacting them and checking out their profile and portfolio.",
  },
  {
    question: "Are the vendors listed safe to book?",
    answer:
      "We provide the data of the vendors who register with us but we do not take any guarantee of their service, actions or behaviour and booking them is at users discretion when they are confident and comfortable doing the same after complete satisfaction and verification on their part.",
  },
  {
    question: "How do I manage my guest list?",
    answer:
      "You can manage your guest lists by clicking on the Guests button after going to the specific event on the  'Created Events' section on the home page.",
  },
  {
    question:
      " How do you find vendors and venues on the platform? Can you help me find the perfect vendor?",
    answer:
      "You can find the venues and vendors by clicking on the second toggle button in the navigation bar at the bottom of your screen. You can add specific filters to find the vendor suitable for you but we do not provide any recommendations for specific vendors and we do not have any partnerships or collaborations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We do not accept any payment as of now and all our services are free for the users currently.",
  },
  {
    question:
      " I accidentally deleted a guest from my guest list. Can they recover them?",
    answer:
      "You can add the guests again by clicking on the Guests button after going to the specific event on the  'Created Events' section on the home page.",
  },
  {
    question: "How do I manage my budget on the platform?",
    answer:
      "You can manage your budgets for the event by clicking on the Budget button after going to the specific event on the  'Created Events' section on the home page. You can also budget separately there for the subevents you've created, if any.",
  },
  {
    question: "Can you invite guests who don't have the app?",
    answer:
      "Yes, you can invite the guests who don't have the app and they will receive a text message regarding the same. It will be better for them to download the app though to get regular updates and access the other features of the app, and photos and posts by the host.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
