import Link from "next/link";
import React from "react";

const AppsLink = () => {
  return (
    <div
      id={"apps"}
      className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-xl md:text-4xl font-extrabold flex flex-col justify-center">
          <div className="mb-10">Download From</div>
          {/* <div className="text-lg mb-10 font-normal">
            Do velit velit labore amet non culpa ullamco sunt ex aute duis enim.
            Qui id voluptate ullamco ex. Pariatur esse esse aliqua cupidatat.
            Sunt mollit aliqua culpa enim. Amet aliquip nisi magna sint velit
            qui ex eiusmod.
          </div> */}
          <div className="flex justify-start space-x-3 mt-3 md:mt-0 md:justify-start items-center">
            <Link
              href={"https:///apps.apple.com/us/app/festa-bash/id6446809761"}
              className="w-2/5"
            >
              <img className="h-20 w-full" src={"images/AppStore.svg"} />
            </Link>
            <Link
              href={
                "https:///play.google.com/store/apps/details?id=com.festabash.user&pli=1"
              }
              className="w-2/5"
            >
              <img className="h-20 w-full" src={"images/PlayStore.svg"} />
            </Link>
          </div>
        </div>
        <div>
          <img src={"/images/mob1.png"} />
        </div>
      </div>
    </div>
  );
};

export default AppsLink;
