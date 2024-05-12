import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiCirclePlus } from "react-icons/ci";
import moment from "moment";

const Centergrid = () => {
  const currentDate = moment();

  const formattedDate = currentDate.format("DD MMMM, YYYY"); // Example format
  return (
    <div className="h-[100vh] w-[100%] max-h-[100vh] flex justify-center items-center border-solid  bg-black">
      <div className="bg-white h-[95%] w-[95%]">
        <div className="w-[95%] flex flex-col justify-center items-center bg-white rounded-md border-solid ">
          <div className="flex items-center justify-between gap-3 w-[90%] mt-[20px] border-solid">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Expenses
            </h2>
            <div className="flex items-center gap-3 border-solid">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="cursor-pointer text-[30px] ">
                {<CiCirclePlus />}
              </span>
            </div>
          </div>
          <div className=" w-[90%] mt-2 border-solid ">
            <p className="text-sm text-muted-foreground">{formattedDate} </p>
          </div>
          <div>
            <img src="./Stats.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centergrid;
