import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <div className="hidden lg:block xl:block 2xl:block">
        <div className="w-full bg-sky-800  ">
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row   ">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-center items-center ml-12 gap-3">
                <div className="">
                  <Image
                    className="cursor-pointer"
                    src="/logo (2).svg"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="">
                  <Image
                    className="cursor-pointer"
                    src="/Starkienstein.svg"
                    width={244}
                    height={25}
                  />
                </div>
              </div>
              <div className=" flex justify-center items-center mt-1">
                <h1 className="text-gray-200 text-xs ml-16">
                  Premium Admin & Dashboard Template
                </h1>
              </div>
            </div>
            <div className="ml-auto bg-white h-screen lg:w-7/12  xl:w-7/12 2xl:w-7/12 w-full rounded ">
              <div className="absolute right-3 pt-3 ">
                <select
                  id="countries"
                  class="cursor-pointer bg-white  text-gray-600 text-sm outline-none block w-full p-2 rounded-md dark:bg-gray-700 "
                >
                  <option selected>English (UK)</option>
                  <option value="US">Arabic</option>
                  <option value="CA">Italian </option>
                  <option value="FR">French </option>
                </select>
              </div>
              <div className="container  mx-auto mt-44 lg:mt-24 xl:mt-44 2xl:mt-54 w-11/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 ">
                <h1 className="text-xl mb-5 font-bold text-gray-800">
                  Sign in{" "}
                </h1>
                <div className="flex justify-center items-center gap-5">
                  <div className="border flex w-full py-1 px-2 justify-center items-center gap-2 rounded-lg">
                    <div className="mt-2">
                      <Image
                        className="cursor-pointer"
                        src="/search 1.svg"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="text-gray-400 text-sm lg:text-xs xl:text-sm 2xl:text-sm">
                      Sign up with Google{" "}
                    </div>
                  </div>
                  <div className="border flex w-full py-1 px-2 justify-center items-center gap-2 rounded-lg">
                    <div className="mt-2">
                      <Image
                        className="cursor-pointer"
                        src="/facebook 1.svg"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <div className="text-gray-400 text-sm lg:text-xs xl:text-sm 2xl:text-sm">
                        Sign up with facebook{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h1 className="text-xl font-semibold  text-gray-800 text-center">
                    - OR -
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <label class="relative block">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center "></span>
                      <input
                        className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                        placeholder="Email Address"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <div className="w-full">
                    <label class="relative block">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center "></span>
                      <input
                        className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                        placeholder="Password"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                </div>
                <Link href="/dashboard">
                  <div className="flex justify-center items-center mt-8 ">
                    <button className=" bg-sky-800 hover:bg-sky-900 focus:bg-sky-900 w-full py-1 rounded-lg text-white font-semibold">
                      Log In
                    </button>
                  </div>
                </Link>
                <h1 className="text-sm text-gray-600 mt-4 font-semibold">
                  Already have an account?{" "}
                  <span className="text-indigo-700 ">Log in</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block lg:hidden xl:hidden 2xl:hidden">
        <div className="bg-sky-800 ">
          <div className="flex justify-center items-center gap-3 px-5 py-12">
            <div className="">
              <Image
                className="cursor-pointer"
                src="/logo (2).svg"
                width={25}
                height={25}
              />
            </div>
            <div className="">
              <Image
                className="cursor-pointer"
                src="/Starkienstein.svg"
                width={244}
                height={25}
              />
            </div>
          </div>
        </div>
        <div className="container  mt-12 mx-auto w-11/12 md:w-6/12">
          <h1 className="text-xl mb-5 font-bold text-gray-800">Sign in </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="border flex w-full py-1 justify-center items-center gap-2 rounded-lg">
              <div className="mt-2">
                <Image
                  className="cursor-pointer"
                  src="/search 1.svg"
                  width={25}
                  height={25}
                />
              </div>
              <div className="text-gray-400 text-sm">Sign up with Google </div>
            </div>
            <div className="border flex w-full py-1 justify-center items-center gap-2 rounded-lg">
              <div className="mt-2">
                <Image
                  className="cursor-pointer"
                  src="/facebook 1.svg"
                  width={25}
                  height={25}
                />
              </div>
              <div className="">
                <div className="text-gray-400 text-sm">
                  Sign up with facebook{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-xl font-semibold  text-gray-800 text-center">
              - OR -
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full">
              <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center "></span>
                <input
                  className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                  placeholder="Email Address"
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="w-full">
              <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center "></span>
                <input
                  className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                  placeholder="Password"
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
          <Link href="/dashboard">
            <div className="flex justify-center items-center mt-8 ">
              <button className=" bg-sky-800 hover:bg-sky-900 focus:bg-sky-900 w-full py-1 rounded-lg text-white font-semibold">
                Log In
              </button>
            </div>
          </Link>
        </div>
      </div>
      <style>
        {`         
          .rounded{
            border-radius: 55px 0px 0px 55px;
          }
                `}
      </style>
    </>
  );
}
