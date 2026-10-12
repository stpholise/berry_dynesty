"use client";
import { EllipsisIcon } from "@animateicons/react/lucide";
import toast from "react-hot-toast";
import { useState } from "react";
import Map from "./component/Map";

interface inputTypes {
  fullName: string;
  email: string;
  message: string;
}

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formValues, setformValues] = useState<inputTypes>(initialValues);

  const isIncomplete = Object.values(formValues).some((v) => v.trim() === "");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setformValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/stpholise@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            _subject: "New Contact Form Message",
            _captcha: "false",
            fullName: formValues.fullName,
            email: formValues.email,
            message: formValues.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      } else {
        toast.success("Mail sent successfuly ");
      }
      setformValues(initialValues);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.error("Error sending mail");
      }
    } finally {
      setLoading(false);
      setformValues(initialValues);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="p-6 rounded-2xl my-25 max-w-3xl text-gray-600 border-gray-300 border-2 w-full mx-auto bg-gray-100">
        <h3 className=" text-3xl sm:text-4xl mt-4 font-semibold text-left text-dark-green">
          Contact Sourcing Support
        </h3>
        <p className=" py-4">
          Have questions about an animal, transport schedules, or bulk sourcing?
        </p>
        <form onSubmit={sendEmail}>
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
                  name="fullName"
                  value={formValues.fullName ?? ""}
                  onChange={handleChange}
                  minLength={4}
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
                  type="email"
                  name="email"
                  value={formValues.email ?? ""}
                  onChange={handleChange}
                  minLength={8}
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
                name="message"
                value={formValues.message ?? ""}
                onChange={handleChange}
                minLength={8}
                className="mt-2 outline-none border-2 border-gray-300 w-full h-20 py-1 px-2 rounded-md bg-gray-200"
              />
            </div>
            <button
              disabled={isIncomplete || loading}
              type="submit"

              className=" disabled:bg-gray-600 rounded-md text-sm font-semibold px-4 py-2 bg-bright-green text-white"
            >
              {loading ? (
                <span>
                  {" "}
                  Sending <EllipsisIcon />
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default Page;
