"use client"
import { ArrowRight, Filter } from "lucide-react";
import LivestockCard from "@/app/_components/LivestockCard";
import  { livestockProducts  } from '../home/page'
const page = () => {
  return (
    <div className="flex flex-col gap-14 bg-gray-100 py-20">
      <div className="max-w-7xl w-full mx-auto px-4 ">
        <h3 className="text-dark-green text-4xl font-semibold">
          Sourced Farm Animals For Sale
        </h3>
        <p className="text-lg text-gray-600">
          All animals are sourced, quarantined, and vet-certified prior to
          dispatch.
        </p>
      </div>
      <div className="flex max-w-7xl px-4 sm:px-8 gap-8 ">
        <div className=" h-fit sticky top-12 flex flex-col gap-5 rounded-2xl p-4 w-70 border-2 border-gray-200 bg-white text-gray-600">
          <div className=" flex py-4 border-b justify-between gap-8">
            <h5 className="font-semibold flex items-center gap-2 text-xl text-black">
              <Filter className=" size-4 text-bright-green" />
              Filters
            </h5>
            <button className="text-sm font-medium text-bright-green">
              Reset All
            </button>
          </div>
          <div className="">
            <p className="text-sm font-semibold uppercase">keyword search</p>
            <input type="text" className="w-full bg-gray-100 rounded-md  p-1.5 mt-3 h-10  text-gray-600 outline-none" placeholder="e.g goat" />
          </div>
          <div className="">
            <p className="text-sm font-semibold uppercase">species category</p>
            <select className="outline-none w-full bg-gray-100 p-1.5 rounded-md mt-3 h-10">
              <option>All Categories</option>
            </select>
          </div>
          <div className="">
            <p className="text-sm font-semibold uppercase flex justify-between">
              <span className="">Max Price($)</span>{" "}
              <span className="text-xs font-semibold text-bright-green">$5,000</span>
            </p>
            <div className="slider"></div>
          </div>
          <div className=" flex flex-col gap-3.5">
            <h6 className="text-sm font-semibold uppercase flex justify-between ">
              Health/certiificaion
            </h6>

            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  // checked={isAccepted}
                  // onChange={(e) => setIsAccepted(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="terms" className="text-xs font-medium">
                  Fully Vaccinated
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  // checked={isAccepted}
                  // onChange={(e) => setIsAccepted(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="terms" className="text-xs font-medium">
                  Passed 14-Day Quarantine
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  // checked={isAccepted}
                  // onChange={(e) => setIsAccepted(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="terms" className="text-xs font-medium">
                  Pedigree/Registered
                </label>
              </div>
            </div>
          </div>
          <div className="bg-amber-100/60 border-gray-100 border shadow-sm rounded-md p-5 flex flex-col gap-2">
            <p className="text-xs font-semibold text-black ">
              Special Order Sourcing
            </p>
            <p className="text-amber-700 text-xs">
              {" "}
              Need 20+ head of cattle or specialized breeding lines?
            </p>
            <button className="text-dark-green  text-xs font-bold pt-2 flex items-center gap-2">
              Request Direct Sourcing <ArrowRight className="size-4" />{" "}
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-10">
          <div className=" header border-gray-200 border-2 w-full flex items-center justify-between bg-white text-gray-600 rounded-2xl py-4 px-4 ">
             <h5 className="text-sm font-semibold">Showing ... animals available</h5>

             <div className="sort flex gap-3 items-center">
              <p className="font-bold text-sm">SORT BY :</p>
              <select className="text-xs font-semibold  py-1.5 px-2 bg-gray-100  rounded-xl outline-none ">
                <option >name</option>
                <option >texting </option>
                <option >name</option>
              </select>
             </div>
          </div>
           <div className="grid grid-cols-3 gap-8">
          {livestockProducts.map((product, i) => (
            <LivestockCard product={product} key={i} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
