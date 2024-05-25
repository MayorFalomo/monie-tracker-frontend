import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiCirclePlus } from "react-icons/ci";
import moment from "moment";
import { useQuery, gql } from "@apollo/client";
import { PlusCircleIcon } from "lucide-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UseDisclosureProps,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { MdCabin } from "react-icons/md";
import Finances, { FinancesProps } from "./Finances";

const AllUsers = gql`
  query($userId: String!) {
    getAllUserExpenses(userId: $userId) {
      date
      category
      item
      price
      icon
      id
      userId
    }
    # allUserFinances(userId: $userId) {
    #   _id
    #   currentBalance
    #   savings
    #   startingBalance
    #   income
    #   userId
    #   date
    # }
    # allUsers {
    #   profileDp
    #   userId
    #   username
    #   email
    #   currency
    # }
  }
`;

type userData = {
  userId: string;
};

type usersFinances = {
  _id: string;
  startingBalance: number;
  currentBalance: number;
  income: number;
  savings: number;
  expenses: [];
  date: string;
};

// type userFinances = {
//   allUserFinances: usersFinances[];
// };

const Centergrid = ({ userId }: userData) => {
  // const { isOpen } = useDisclosure();

  const { loading, error, data } = useQuery(AllUsers, {
    variables: {
      userId,
    },
    // fetchPolicy: "cache-and-network",
  });

  // console.log(data.getAllUserExpenses, "data");

  // const [currentUserFinances, setCurrentUserFinances] = useState<
  //   FinancesProps[]
  // >();

  // // Map the data.allUserFinances array to FinancesProps objects
  // useEffect(() => {
  //   if (data?.allUserFinances) {
  //     setCurrentUserFinances(
  //       data?.allUserFinances.map((finance: usersFinances) => ({
  //         id: finance._id,
  //         startingBalance: finance.startingBalance,
  //         currentBalance: finance.currentBalance,
  //         income: finance.income,
  //         savings: finance.savings,
  //         expenses: finance.expenses,
  //         date: new Date().toISOString(),
  //       }))
  //     );
  //   }
  // }, [data]);

  // console.log(currentUserFinances, "useData");

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const currentDate = moment();

  const formattedDate = currentDate.format("DD MMMM, YYYY"); // Example format

  return (
    <div className="h-[100vh] w-[100%] max-h-[100vh] flex justify-center items-center border-solid ">
      <div className="bg-white rounded-[25px] h-[95%] w-[95%]">
        <div className="w-full flex flex-col justify-center items-center bg-white rounded-md border-solid ">
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

          <Finances currentUserExpenses={data?.getAllUserExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Centergrid;
