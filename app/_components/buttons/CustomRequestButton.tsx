
"use client";

import PryButton from "@/app/_components/buttons/PryButton";

export default function CustomRequestButton() {
  const handleClick = () => {
    const phoneNumber = "2347069309340";
    const message = encodeURIComponent(
      "Hello! I would like to submit a custom request.",
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <PryButton
      text="Submit Custom Request"
      onClick={handleClick}
      classNames="bg-bright-green h-fit w-fit px-4 py-2 rounded-md"
    />
  );
}

