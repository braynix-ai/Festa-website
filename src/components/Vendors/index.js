import SectionHeading from "../SectionHeading";

export default function Vendors() {
  return (
    <div id="vendors" className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="">
          <SectionHeading heading="Choose your vendors" />
          <div className="text-gray-300 text-center text-lg">
            Select vendors of your choice and view the wide range of options to
            hire them.
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="relative group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center h-[100vh] w-full group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Birthday
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Laborum voluptate sit commodo dolore dolor nisi magna elit
                  officia incididunt adipisicing cillum eu eiusmod.Irure amet
                  cillum consequat sint.
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://media.istockphoto.com/id/1056679966/photo/wedding-photographer-takes-pictures-of-bride-and-groom.jpg?s=2048x2048&w=is&k=20&c=0hYXuSV9VWrMHR1vBxiyuWM00EVyrbGvyG6RNd1mnJs="
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    photography / Wedding
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Laborum voluptate sit commodo dolore dolor nisi magna elit
                  officia incididunt adipisicing cillum eu eiusmod.Irure amet
                  cillum consequat sint.
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src="https://img.freepik.com/premium-photo/lviv-ukraine-july-16-2021-concert-city-public-park-yoga-day-band-scene_259348-9055.jpg?w=996"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Dj night
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Laborum voluptate sit commodo dolore dolor nisi magna elit
                  officia incididunt adipisicing cillum eu eiusmod.Irure amet
                  cillum consequat sint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
