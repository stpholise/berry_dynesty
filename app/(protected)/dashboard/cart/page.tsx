"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store"; 
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { ShoppingCart, Trash } from "@animateicons/react/lucide";
import Link from "next/link";

const Page = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const livestockTotal = useSelector(
    (state: RootState) => state.cart.totalPrice,
  );

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto text-gray-500 flex flex-col gap-14">
        <div className="">
          <h2 className="text-3xl text-dark-green font-semibold mb-2">
            Purchase Cart
          </h2>
          <p className="text-sm text-gray-500">
            Review selected livestock and estimate delivery to your farm.
          </p>
        </div>
        <div className="md:grid gap-8 grid-cols-[2fr__1fr]">
          <div className="rounded-2xl flex flex-col gap-4 p-6 border-2 border-gray-200 bg-white h-fit">
            {cartItems.length >= 1 ? (
              cartItems.map((item, i) => (
                <div
                  className="flex justify-between items-center gap-12"
                  key={i}
                >
                  <div className="flex items-center  gap-3">
                    <Image
                      src={item.product.image}
                      width={200}
                      height={200}
                      className="size-20 rounded-lg object-cover"
                      alt={item.product.name}
                    />
                    <div className=" flex flex-col justify-center ">
                      <h5 className="text-xs text-bright-green font-bold">
                        {item.product.category?.slug.current}
                      </h5>
                      <h4 className="text-2xl font-semibold text-dark-green">
                        {item.product.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        ${item.product.price} each
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-12 items-center">
                    <div className=" border-gray-200 bg-gray-100 flex rounded-lg p-2 gap-4">
                      <button type="button" className="cursor-pointer w-8">
                        <Minus />
                      </button>
                      <span className="">{item.quantity}</span>
                      <button type="button" className="cursor-pointer w-8">
                        <Plus />
                      </button>
                    </div>
                    <p className="text-xl font-semibold text-black">
                      ${item.product.price * item.quantity}
                    </p>
                    <button type="button" className="">
                      <Trash className="size-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-3 items-center justify-center py-12">
                <ShoppingCart size={40} />
                <p className="">Your purchase order cart is currently empty.</p>
                <Link
                  href={"/livestock"}
                  className="bg-bright-green text-white rounded-lg py-2 px-8"
                >
                  Browse livestocks
                </Link>
              </div>
            )}
          </div>
          <div className="rounded-2xl flex flex-col gap-5 p-6 border-2 border-gray-200 bg-white h-fit">
            <h2 className="text-2xl text-dark-green font-semibold">
              Order Summary
            </h2>
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
              <h4 className="text-2xl text-black font-semibold">
                Total Price:
              </h4>
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
        </div>
      </div>
    </div>
  );
};

export default Page;
