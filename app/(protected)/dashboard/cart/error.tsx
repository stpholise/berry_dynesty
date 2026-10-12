"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Cart error boundary caught an error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-100 gap-4 p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        Something went wrong!
      </h2>
      <p className="text-gray-600 max-w-md">
        {error.message || "Failed to load your cart. Please try again."}
      </p>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => reset()}
          className="bg-bright-green text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/livestock"
          className="border border-gray-300 text-gray-700 font-medium px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to livestock
        </Link>
      </div>
    </div>
  );
}
