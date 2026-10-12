"use client";
import { catchError, ErrorInfo } from "next/error";
import PryButton from "@/app/_components/buttons/PryButton";

function ErrorFallback(props: { title: string }, { error, retry }: ErrorInfo) {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";
  return (
    <div className=" w-full max-w-4xl flex items-center justify-center gap-4 flex-col ">
      <h2 className="text-2xl text-dark-green ">{props.title}</h2>
      <p className="text-sm">{message} this may be due to network </p>
      <PryButton onClick={() => retry()} text={"Try again"} />
    </div>
  );
}

const ErrorWrapper = catchError(ErrorFallback);
export default ErrorWrapper;
