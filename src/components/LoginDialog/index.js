import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function LoginDialog({ loginOpen, setLoginOpen }) {
  const router = useRouter();
  function closeModal() {
    setLoginOpen(false);
  }

  return (
    <>
      <Transition appear show={loginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#0A061D] bg-opacity-95 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Login as
                  </Dialog.Title>
                  <div className="my-8 flex space-x-5">
                    <div
                      onClick={() =>
                        router.push(
                          "https:///festa-dashboard-client.vercel.app/"
                        )
                      }
                      className="flex justify-center items-center w-32 h-32 rounded-xl  border-gray-300 border shadow-xl hover:bg-blue-100 text-xl text-gray-400 font-medium"
                    >
                      User
                    </div>
                    <div
                      onClick={() =>
                        router.push("https:///festa-vendor.vercel.app/")
                      }
                      className="flex justify-center items-center w-32 h-32 rounded-xl border-gray-300 border shadow-xl hover:bg-blue-100 text-xl text-gray-400 font-medium"
                    >
                      Vendor
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
