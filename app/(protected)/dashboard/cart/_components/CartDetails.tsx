"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import type { Product } from "@/types/sanity";

const CartDetails = ({ products }: { products: Product[] }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const livestockTotal = useSelector(
    (state: RootState) => state.cart.totalPrice,
  );
  console.log(products);
  return (
    <div className="rounded-2xl flex flex-col gap-5 p-6 border-2 border-gray-200 bg-white h-fit">
      <h2 className="text-2xl text-dark-green font-semibold">Order Summary</h2>
      <div className="border-y border-gray-200 py-6 flex flex-col gap-2">
        <h6 className="text-gray-400 font-semiibold uppercase text-sm">
          select delivery transport region
        </h6>
        <select className="w-full rounded-md p-2 border-2 border-gray-200 bg-gray-100 text-black outline-none">
          <option>Interstate Transport Freight - $350</option>
        </select>
      </div>
      <div className="border-b border-b-gray-300 py-2 flex flex-col gap-4 text-gray-500">
        <div className=" flex items-center justify-between gap-8">
          <p className="">Livestock Subtotal:</p>{" "}
          <p className=" text-right text-black font-semibold">
            $ {livestockTotal}
          </p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <p className="">Vet Health Inspection Fee:</p>{" "}
          <p className=" text-right text-black font-semibold">
            $ {livestockTotal}
          </p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <p className="">Climate Transport Freight:</p>{" "}
          <p className=" text-right text-black font-semibold">
            $ {livestockTotal}
          </p>
        </div>
      </div>
      <div className=" flex justify-between gap-4">
        <h4 className="text-2xl text-black font-semibold">Total Price:</h4>
        <p className="text-2xl text-bright-green font-semibold text-right ">
          ${livestockTotal}
        </p>
      </div>
      <div className="border-2 border-gray-200 rounded-2xl p-4 text-xs flex flex-col gap-2">
        <h5 className="text-base py-2 text-gray-500 font-semibold uppercase">
          PAYMENT OPTIONS
        </h5>

        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="paymentOption"
            value="pro"
            // checked={selectedPlan === "pro"}
            // onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Pro Plan</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="paymentOption"
            value="pro"
            // checked={selectedPlan === "pro"}
            // onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Pro Plan</span>
        </label>
      </div>
      <button
        type="button"
        className="text-white font-semibold text-lg rounded-lg bg-bright-green p-2"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartDetails;
