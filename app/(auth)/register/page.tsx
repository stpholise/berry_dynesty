"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth, useSignUp } from "@clerk/nextjs";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signUp, errors, fetchStatus } = useSignUp();

  const { isSignedIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailAddress = formData.get("emailAddress") as string;
    const password = formData.get("password") as string;

    const { error } = await signUp.password({
      emailAddress,
      password,
    });

    if (error) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    if (!error) await signUp.verifications.sendEmailCode();
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
      return;
    }

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session.currentTask);
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
  };

  if (signUp.status === "complete" || isSignedIn) {
    return null;
  }

  if (
    signUp.status === "missing_requirements" &&
    signUp.unverifiedFields.includes("email_address") &&
    signUp.missingFields.length === 0
  ) {
    return (
      <>
        <h1>Verify your account</h1>
        <form onSubmit={handleVerify}>
          <div>
            <label htmlFor="code">Code</label>
            <input id="code" name="code" type="text" />
          </div>
          {errors.fields.code && <p>{errors.fields.code.message}</p>}
          <button type="submit" disabled={fetchStatus === "fetching"}>
            Verify
          </button>
        </form>
        <button onClick={() => signUp.verifications.sendEmailCode()}>
          I need a new code
        </button>
      </>
    );
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

            <div id="clerk-captcha" />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 text-gray-700 py-3 "
            >
              <div className="">
                <label
                  htmlFor="emailAddress"
                  className="py-1 block text-base font-medium "
                >
                  Email
                </label>
                <input
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
                  htmlFor="password"
                  className="py-1 block text-base font-medium "
                >
                  Password
                </label>
                <div className="relative">
                  <input
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
              <button
                disabled={fetchStatus === "fetching"}
                type="submit"
                className="my-2 p-2 w-full bg-bright-green text-base font-medium text-white rounded-md"
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
              <button className="bg-bright-green/10 p-2 rounded-sm">
                Sign up with Google
              </button>
              <button className="bg-bright-green/10 p-2 rounded-sm">
                Sign up with Facebook
              </button>
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
