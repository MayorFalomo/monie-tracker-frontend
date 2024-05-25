import moment from "moment";
import React from "react";
import { FcAlarmClock } from "react-icons/fc";

export type Expense = {
  id: String;
  item: String;
  price: Number;
  date: number;
  category: String;
  icon: String;
};

const ShowExpense: React.FC<{ finance: Expense }> = ({ finance }) => {
  return (
    <div className="border-solid  ">
      <div className="flex items-center justify-between gap-[20px] w-[50%] m-auto border-solid  ">
        <div className="flex items-center justify-start gap-3">
          <p className="bg-[red] rounded-full p-2 ">{<FcAlarmClock />} </p>
          <div className="border-solid border-3 border-red-500 gap-[4px]">
            <h2>{finance?.item} </h2>
            <ul className="flex items-center gap-[5px]">
              <span className="text-black list-disc">
                {moment.unix(finance?.date).format("h:mm a")}{" "}
              </span>
              <li className="list-disc ml-6 text-gray-600 "> </li>
              <p className="list-disc">{finance?.category} </p>
            </ul>
          </div>
        </div>
        <h2>{finance?.price}</h2>
      </div>
    </div>
  );
};

export default ShowExpense;
