import CartContent from "./_components/CartContent";
import { LoaderIcon } from "@animateicons/react/lucide";
import { Suspense } from "react";
 const Page = async () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto text-gray-500 flex flex-col gap-14">
        <div className="p-4">
          <h2 className="text-3xl text-dark-green font-semibold mb-2">
            Purchase Cart
          </h2>
          <p className="text-sm text-gray-500">
            Review selected livestock and estimate delivery to your farm.
          </p>
        </div>
        <div className="flex flex-col gap-12 p-2 md:grid:gap-8 grid-cols-[2fr__1fr]">
          <Suspense
            fallback={
              <div className="flex justify-center py-12">
                <LoaderIcon duration={4} className="animate-spin"/>
                <span className="ml-2">Loading your cart...</span>
              </div>
            }
          >
            <CartContent />
          </Suspense> 
        </div>
      </div>
    </div>
  );
};

export default Page;
