import React from "react";

const page = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="p-6 rounded-2xl my-25 max-w-3xl text-gray-600 border-gray-300 border-2 w-full mx-auto bg-gray-100">
        <h3 className=" text-3xl sm:text-4xl mt-4 font-semibold text-left text-dark-green">
          Contact Sourcing Support
        </h3>
        <p className=" py-4">
          Have questions about an animal, transport schedules, or bulk sourcing?
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex sm:flex-row flex-col w-full gap-8">
            <div className="sm:w-1/2">
              <label
                htmlFor=""
                className=" text-xs font-semibold uppercase font-inter"
              >
                FULL NAME
              </label>
              <input
                type="text"
                name=""
                id=""
                className="outline-none mt-2 border-2 border-gray-300 bg-gray-200 p-2 w-full rounded-sm"
              />
            </div>
            <div className="sm:w-1/2">
              <label
                htmlFor=""
                className="text-xs font-semibold uppercase font-inter"
              >
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                className="outline-none mt-2 border-2 border-gray-300 bg-gray-200 p-2 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-xs font-semibold uppercase font-inter"
            >
              message
            </label>
            <textarea
              name=""
              id=""
              className="mt-2 outline-none border-2 border-gray-300 w-full h-20 py-1 px-2 rounded-md bg-gray-200"
            />
          </div>
          <button
            type="button"
            className="rounded-md text-sm font-semibold px-4 py-2 bg-bright-green text-white"
          >
            Send Message
          </button>
        </div>
      </div>

      <div className="map">a map of business location</div>
    </div>
  );
};

export default page;
