"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth, useSignUp } from "@clerk/nextjs";
import { Eye, EyeClosed, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface UserInputState {
  emailAddress: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

const Page = () => {
  const router = useRouter();

  const [userInput, setUserInput] = useState<UserInputState>({
    emailAddress: "",
    password: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const [showVerification, setShowVerification] = useState(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signUp, errors, fetchStatus } = useSignUp();

  const handleGoogleSignUp = async () => {
    const { error } = await signUp.sso({
      strategy: "oauth_google",
      redirectCallbackUrl: "/home",
      redirectUrl: "/home",
    });

    if (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const { isSignedIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { emailAddress, password, phoneNumber, firstName, lastName } =
      userInput;

    if (!emailAddress || !password || !phoneNumber || !firstName || !lastName) {
      return;
    }

    const baseName =
      firstName && lastName
        ? `${firstName}${lastName}`
        : emailAddress.split("@")[0];
    const cleanBase = baseName.toLowerCase().replace(/[^a-z0-9]/g, "");

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    const username = `${cleanBase}${randomNumber}`;

    const { error } = await signUp.password({
      emailAddress,
      password,
      firstName,
      lastName,
      phoneNumber,
      username,
    });

    if (error) {
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    const result = await signUp.verifications.sendEmailCode();

    const emailCodeError = result.error;
    setShowVerification(true);

    if (emailCodeError) {
      console.error(JSON.stringify(emailCodeError, null, 2));
    }
  };

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const code = formData.get("code") as string;

    const { error } = await signUp.verifications.verifyEmailCode({
      code,
    });

    if (error) {
      console.error(JSON.stringify(error, null, 2));
    }

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          console.log("SESSION:", session);
          console.log("SESSION STATUS:", session?.status);
          console.log("CURRENT TASK:", session?.currentTask);

          if (session?.currentTask) {
            console.log("Pending task:", session.currentTask);
            return;
          }

          const url = decorateUrl("/home");

          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
    console.log("FINALIZED");
  };

  if (signUp.status === "complete" || isSignedIn) {
    return null;
  }

  if (
    // signUp.status === "missing_requirements" &&
    // signUp.unverifiedFields.includes("email_address") &&
    // signUp.missingFields.length === 0
    showVerification
  ) {
    if (showVerification) {
      return (
        <div className="fixed max-w-5xl mx-auto inset-0 w-full h-screen z-50 flex flex-col gap-8 bg-gray-100 text-black py-12">
          <div
            className="absolute top-4 right-4 "
            onClick={() => setShowVerification(false)}
          >
            <X />
          </div>
          <form
            className="max-w-2xl w-full rounded-xl mx-auto flex flex-col gap-4"
            onSubmit={handleVerify}
          >
            <h1 className="text-2xl font-semibold text-bright-green">
              Verify your account
            </h1>
            <div>
              <label htmlFor="code">Code</label>
              <input
                id="code"
                name="code"
                type="text"
                className="text-2xl font-medium p-2 border border-gray-300 w-full rounded-2xl outline-none"
              />
            </div>

            {errors.fields.code && <p>{errors.fields.code.message}</p>}

            <button
              type="submit"
              disabled={fetchStatus === "fetching"}
              className="disabled:bg-gray-500 w-full rounded-xl p-2 bg-bright-green text-gray-100"
            >
              Verify
            </button>
          </form>

          <button
            type="button"
            onClick={() => signUp.verifications.sendEmailCode()}
          >
            I need a new code
          </button>
        </div>
      );
    }
  }

  return (
    <div className="w-full min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto min-h-screen p-8 flex flex-col md:flex-row  gap-12">
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="max-w-sm w-full flex flex-col gap-4 text-gray-500">
            <h4 className="text-2xl text-dark-green font-semibold">
              Create your account{" "}
            </h4>
            <p className="text-lg">
              Create your account today and start buying farm animals.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 text-gray-700 py-3 "
            >
              <div className="">
                <label
                  htmlFor="firstName"
                  className="py-1 block text-base font-medium "
                >
                  First name
                </label>
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  value={userInput.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                />
                {errors.fields.firstName && (
                  <p className="text-xs text-red-500 py-2">
                    {errors.fields.firstName.message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="lastName"
                  className="py-1 block text-base font-medium "
                >
                  Last name
                </label>
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  value={userInput.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                />
                {errors.fields.lastName && (
                  <p className="text-xs text-red-500 py-2">
                    {errors.fields.lastName.message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="emailAddress"
                  className="py-1 block text-base font-medium "
                >
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      emailAddress: e.target.value,
                    }))
                  }
                  value={userInput.emailAddress}
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                />
                {errors.fields.emailAddress && (
                  <p className="text-xs text-red-500 py-2">
                    {errors.fields.emailAddress.message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="phoneNumber"
                  className="py-1 block text-base font-medium "
                >
                  Phone
                </label>
                <div className="flex items-center bg-gray-200/50 w-full rounded-md px-2">
                  <div className="">+234</div>
                  <input
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d*$/.test(value)) {
                        setUserInput((prev) => ({
                          ...prev,
                          phoneNumber: value,
                        }));
                      }
                    }}
                    value={userInput.phoneNumber}
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="p-2  w-full rounded-md outline-none"
                    maxLength={10}
                  />
                </div>
                {errors.fields.phoneNumber && (
                  <p className="text-xs text-red-500 py-2">
                    {errors.fields.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="py-1 block text-base font-medium "
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setUserInput((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    value={userInput.password}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                  />
                  <button
                    onClick={() => setShowPassword((value) => !value)}
                    type="button"
                    className="absolute z-20 top-2 right-2 w-6"
                  >
                    {showPassword ? (
                      <Eye className="text-birght-green size-5" />
                    ) : (
                      <EyeClosed className="text-birght-green size-5" />
                    )}
                  </button>
                </div>
                {errors.fields.password && (
                  <p className="text-xs text-red-500 py-2">
                    {errors.fields.password.message}
                  </p>
                )}
              </div>
              <div id="clerk-captcha" className="z-80 inset-0 m-auto" />

              <button
                disabled={
                  fetchStatus === "fetching" ||
                  Object.values(userInput).some((field) => field === "")
                }
                type="submit"
                className="disabled:bg-gray-500 my-2 p-2 w-full bg-bright-green text-base font-medium text-white rounded-md"
              >
                Sign up
              </button>
            </form>

            <div className="flex gap-2 items-center">
              {" "}
              <div className="border-gray-200 border-t h-0 w-1/2" />
              <p className="text-lg">Or</p>
              <div className="border-gray-200 border-t h-0 w-1/2" />
            </div>
            <div className=" flex flex-col gap-3">
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="bg-bright-green/10 p-2 rounded-sm"
              >
                Sign up with Google
              </button>
              {/* <button className="bg-bright-green/10 p-2 rounded-sm">
                Sign up with Facebook
              </button> */}
            </div>

            <p className=" text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <Image
            src="/bg/farm_animals.jpg"
            width={800}
            height={700}
            alt="Farm animals"
            className="w-full h-full min-h-150 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
