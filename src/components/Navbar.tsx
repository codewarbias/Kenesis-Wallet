import { Bell, Search, Wallet } from "lucide-react";

export function Navbar() {
  return (
    <div className="h-fit p-4 md:py-4 md:px-8 md:w-full">
      <div className="flex items-start flex-row lg:justify-between gap-4">
        {" "}
        <div className="p-px rounded-md w-full bg-gradient-to-br from-[#0680FF] to-[#022ED2]">
        <div className="bg-[#0c0c18] rounded-md w-full flex items-center">
          <div className="text-white opacity-50 px-1 text-sm">
            <Search />
          </div>
          <input
            className="text-white w-full p-2 outline-0"
            type="text"
            placeholder="Seach"
          />
        </div>
        </div>
        <div className="flex gap-4">
            <div className="p-px rounded-md w-full bg-gradient-to-br from-[#0680FF] via-[#022ED2] to-[#022ED2]">
                <div className="bg-[#0c0c18] text-white rounded-md p-2">
                <Bell />
            </div>
        </div>
            <div className="p-px rounded-md w-full bg-gradient-to-br from-[#0680FF] via-[#022ED2] to-[#022ED2]">
                <div className="flex gap-3 text-gray-200 bg-[#0c0c18] rounded-md p-2">
                    <p>0x6C4...FCF3741</p>
                    <Wallet />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}