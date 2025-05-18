import { ArrowUp } from "lucide-react";
import { TransactionTable } from "../components/TransactionTable";
import FilterSortBar from "../components/FilterSortBar";

const cards = [
  {
    title: "Balance",
    value: "$833.00",
    change: (
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-1 text-sm lg:text-lg">
          <span className="bg-green-900/50 rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-gray-100">from yesterday</span>
        </div>
        <button className="p-2 bg-[linear-gradient(to_right,_#0680FF,_#022ED2)] text-white text-sm rounded-md">
          Request Withdrawl
        </button>
      </div>
    ),
  },
  {
    title: "To Receive",
    value: "$833.00",
    change: (
      <>
        <div className="flex items-center space-x-1 text-sm lg:text-lg">
          <span className="bg-green-900/50 rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-gray-100">Future values you will receive</span>
        </div>
      </>
    ),
  },
  {
    title: "Withdrawals Made",
    value: "$745,000",
    change: (
      <>
        <div className="flex text-sm lg:text-lg items-center space-x-1">
          <span className="bg-green-900/50 rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-gray-100">Amount already withdrawn</span>
        </div>
      </>
    ),
  },
];

export const WalletCard = () => {
  return (
    <div className="mt-10 mx-4 rounded-lg">
      <div className="max-w-full border blue-600 p-4">
        <div className="bg-gradient-to-b from-[#0680FF] via-transparent p-px rounded-lg">
          <div className=" p-10 flex flex-col gap-3 text-white bg-[#0a0a1a] rounded-lg">
            <h1 className="border-gradient w-fit ">
              Wallet
            </h1>
            <p>
              Withdrawals are automatically processed after 72 hours and sent to
              your designated wallet if no dispute is raised by the buyer.
            </p>
            <p>Notice: A 1.5% fee is deducted from all your sales.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 w-full h-fit gap-4 rounded-md py-4">
          {cards.map((card) => (
            <div className="p-px rounded-xl bg-gradient-to-b from-[#0680FF] via-[#022ED2] to-[#022ED2]">
              <div className="bg-[#0c0c18] h-full py-6 px-6 rounded-xl flex flex-col justify-between">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-gray-100 text-sm lg:text-xl">{card.title}</h3>
                  <p className="font-bold text-2xl lg:text-5xl text-white">{card.value}</p>
                  <div className="flex items-center gap-x-1 mt-2">
                    <p className="text-lg">
                      {card.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-gradient-to-b from-[#0680FF] via-[#022ED2] to-transparent p-px rounded-md">
          <div className="h-fit p-4 bg-[#0a0a1a] rounded-md">
            <div className="flex flex-col lg:flex-row">
              <h1 className="flex-1 text-white text-xl lg:px-8 py-4">
                Latest Transaction
              </h1>
              <FilterSortBar />
            </div>
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};
