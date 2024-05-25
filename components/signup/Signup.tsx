import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="flex items-start h-full w-full ">
      <div id="loginSection" className="relative h-full w-[60%]  border-solid">
        <div className="flex flex-col items-center justify-center h-full border">
          <div>
            <h2 className="text-white scroll- text-3xl font-semibold tracking-tight first:mt-0">
              MonieTracker{" "}
            </h2>
            <p className="text-white leading-7 [&:not(:first-child)]:my-3">
              The best and most seamless Finance/Money Tracking app at SEA
            </p>
            <Button className="bg-[#0575E6] relative z-10 hover:bg-[#02298A] cursor-pointer rounded-[20px]">
              Read More{" "}
            </Button>
          </div>
        </div>
        <div className="fixed bottom-[-500px] left-[-1100px] ">
          <img className="w-full" src="./Line.svg" alt="img" />
        </div>
        <div className="fixed bottom-[-500px] left-[-1200px]">
          <img className="w-full" src="./Line.svg" alt="img" />
        </div>
      </div>

      <div className="h-[100vh] w-[40%] bg-white border-solid ">
        <div className="w-[100%] h-full flex flex-col justify-center ">
          <div className="flex flex-col gap-[30px] m-auto w-[80%]">
            <div>
              <h2 className="text-black scroll- text-3xl font-semibold tracking-tight first:mt-0">
                Sign Up
              </h2>
              <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                Start Tracking your Finances today!
              </p>
            </div>
            <form className="flex flex-col gap-4 ">
              <div className="flex items-center gap-2 p-2 px-3 rounded-[20px] border-solid border-2 border-gray-400 ">
                <Mail color="gray" size={20} />
                <input
                  type="email"
                  className="w-full p-2  border-none outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center gap-2 p-2 px-3 rounded-[20px] border-solid border-2 border-gray-400 ">
                <Lock color="#a59c9c" size={20} />
                <input
                  type="password"
                  className="w-full p-2 outline-none border-none"
                  placeholder="password"
                />
              </div>
              <div className="flex flex-col items-center">
                <Button className="bg-[#0575E6] w-full text-[18px] p-[20px] hover:bg-[#0575E6] rounded-[20px]">
                  Sign Up{" "}
                </Button>
                <div className="flex justify-center items-center gap-[10px] mt-3">
                  <span className="h-[1px] w-[200px] bg-black opacity-[0.25]  max-nav:w-[150px] max-sm:w-[100px]"></span>
                  <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                    OR{" "}
                  </p>
                  <span className="h-[1px] w-[200px] bg-black opacity-[0.25]  max-nav:w-[150px] max-sm:w-[100px]"></span>
                </div>
                <button className="flex items-center justify-center p-3 mt-3 gap-[20px] w-full border-solid border-2 border-black-400 rounded-[30px]">
                  {<FcGoogle className="text-[24px] max-[400px]:text-[18px]" />}
                  <p>Sign Up with Google </p>
                </button>
                <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                  Have an account? <Link href="/login">Login </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
