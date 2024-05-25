import React from "react";
import { Button } from "../ui/button";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { AnimatePresence, motion } from "framer-motion";
const Login = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-start h-full w-full "
      >
        <div
          id="loginSection"
          className="relative h-full w-[60%]  border-solid"
        >
          <div className="flex flex-col  items-center justify-center h-full border">
            <div>
              <h2 className="text-white scroll- text-3xl font-semibold tracking-tight first:mt-0">
                MonieTracker{" "}
              </h2>
              <p className="text-white leading-7 [&:not(:first-child)]:my-3">
                Login to your account and begin tracking your finances
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
                  Login
                </h2>
                <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                  Welcome Back
                </p>
              </div>
              <form className="flex flex-col gap-4 ">
                <div className="flex items-center gap-2 p-2 px-3 rounded-[20px] border-solid border-2 border-gray-400 ">
                  <Mail color="gray" size={20} />
                  <input
                    type="email"
                    className="w-full p-2 bg-transparent border-none outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center gap-2 p-2 px-3 rounded-[20px] border-solid border-2 border-gray-400 ">
                  <Lock color="#a59c9c" size={20} />
                  <input
                    type="password"
                    className="w-full p-2 bg-transparent rounded-sm outline-none border-none"
                    placeholder="password"
                  />
                </div>
                <div className="flex flex-col items-center ">
                  <button className="bg-[#0575E6] text-white w-full text-[18px] p-2 hover:bg-[#0575E6] rounded-[20px]">
                    Login
                  </button>
                  <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                    Don't Have an account? <Link href="/signup">Sign Up </Link>
                  </p>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <span className="h-[1px] w-[200px] bg-black opacity-[0.25]  max-nav:w-[150px] max-sm:w-[100px]"></span>
                  <p className="text-black leading-7 [&:not(:first-child)]:mt-3">
                    OR{" "}
                  </p>
                  <span className="h-[1px] w-[200px] bg-black opacity-[0.25]  max-nav:w-[150px] max-sm:w-[100px]"></span>
                </div>
                <button className="flex items-center justify-center p-3 gap-[20px] bg-transparent text-black border-solid border-2 border-black-400 rounded-[30px]">
                  {<FcGoogle className="text-[24px] max-[400px]:text-[18px]" />}
                  <p>Continue with Google </p>
                </button>

                <p className="flex items-center justify-center gap-1 text-black leading-7 [&:not(:first-child)]:mt-3">
                  Forgot Password?{" "}
                  <span className="text-[teal] cursor-pointer ">
                    Click here{" "}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
