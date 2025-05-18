import { useSidebar } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "./Navbar";
import WalletTabs from "./Wallet";
import { Route, Routes } from "react-router-dom";
import { Withdrawls } from "@/pages/Withdrawls";
import { Reimbursement } from "@/pages/Reimbursement";
import { WalletCard } from "../pages/WalletCard";

export default function LayoutContent() {
  const { open } = useSidebar();

  const mainWidthClass = open
    ? "w-full md:w-2/3 lg:w-full h-fit"
    : "w-full md:w-full lg:w-full h-fit";

  return (
    <main className={mainWidthClass}>
      <div className="flex items-center">
        <SidebarTrigger className="fixed z-50 m-2 p-2 bg-black text-[#2a73c0] rounded" />
        <Navbar />
      </div>

      <WalletTabs />

      <Routes>
        <Route path="/wallet" element={<WalletCard />} />
        <Route path="/withdrawals" element={<Withdrawls />} />
        <Route path="/reimbursement" element={<Reimbursement />} />
        <Route path="*" element={<WalletCard />} />
      </Routes>
    </main>
  );
}
