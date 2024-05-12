import React from "react";
import Image from "next/image";
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Navbar = () => {
  return (
    <nav className="h-[100vh] max-h-[100vh] bg-black text-white  border-solid">
      <div className="flex justify-between flex-col h-full">
        <div className="flex justify-center w-[80%]">
          <h3 className="scroll-m-20 mt-[10px] border-b pb-2 text-2xl font-semibold tracking-tight">
            Monie-Tracker
          </h3>
        </div>

        <div className="h-[95%] flex flex-col gap-[30px] justify-evenly items-center border-solid ">
          <div className=" w-[80%] border-solid  ">
            <div className="relative w-[100px] ">
              <img
                //   width={100}
                //   height={100}
                src="./Profile.svg"
                style={{ width: "100%" }}
                //   src="https://www.pngitem.com/pimgs/m/150-1503945_free-download-icon-png-green-house-icon-png.png"
                alt="Image"
                className="rounded-md object-cover"
              />
              <span className="absolute top-[-7px] right-[-10px] bg-[red] w-[30px] h-[30px] flex justify-center items-center text-center text-white rounded-[50%] ">
                {" "}
                4{" "}
              </span>
            </div>

            <h3 className="scroll-m-20 mt-[15px] text-xl font-semibold tracking-tight">
              Samantha
            </h3>
            <p className="leading-7 text-sm text-muted-foreground opacity-50 [&:not(:first-child)]:mt-1">
              Samantha@gmail.com{" "}
            </p>
          </div>
          <ul className="w-[80%] text-[22px] border-solid  my-6 cursor-pointer list-none [&>li]:mt-2">
            <li>Dashboard</li>
            <li>Expenses </li>
            <li>Wallets </li>
            <li>Summary </li>
            <li>Accounts </li>
            <li>Settings</li>
          </ul>
        </div>
        <ul className="flex items-center justify-around gap-2 w-full text-[22px] border-solid  my-6 cursor-pointer list-none [&>li]:mt-2">
          <li> {<MdOutlineWhatsapp />} </li>
          <li> {<IoLogoInstagram />} </li>
          <li> {<IoLogoLinkedin />} </li>
          <li> {<MdOutlineFacebook />} </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
