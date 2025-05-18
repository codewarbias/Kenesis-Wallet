import { useState } from "react"
import {
  Box,
  Flame,
  Home,
  Image,
  InboxIcon,
  LineChart,
  LogOut,
  Settings,
  ShoppingCart,
  StarIcon,
  User,
  Wallet2,
} from "lucide-react"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Initial", url: "#", icon: Home },
  { title: "Product", url: "#", icon: Box },
  { title: "Affiliate Showcase", url: "#", icon: StarIcon },
  { title: "Member Area", url: "#", icon: User },
  { title: "Wallet", url: "#", icon: Wallet2 },
  { title: "Affiliate Product", url: "#", icon: ShoppingCart },
  { title: "Sale", url: "#", icon: LineChart },
  { title: "NFT Automation-Email", url: "#", icon: Image },
  { title: "Hot Leads", url: "#", icon: Flame },
]

const items1 = [
  { title: "Settings", url: "#", icon: Settings },
  { title: "Messages", url: "#", icon: InboxIcon },
  { title: "Log out", url: "#", icon: LogOut },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const Menuitem = (item: { title: string; url: string; icon: any }) => {
    const isActive = activeItem === item.title
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={`flex items-center gap-2 rounded px-2 py-1 ${
            isActive ? "bg-gradient-to-r from-[#0C0A27] to-[#022ED2] text-white hover:text-white" : "text-white hover:bg-white/10 hover:text-white"
          }`}
          onClick={() => setActiveItem(item.title)}
        >
          <a href={item.url}>
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }


  return (
    <Sidebar>
      <SidebarHeader className="items-center text-2xl font-bold bg-gradient-to-br from-[#0C0A27] to-[#030c2e] text-white">
        Kenesis
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-br from-[#0C0A27] to-[#030c2e]">
        <SidebarGroup className="text-white">
          <SidebarGroupContent>
            <SidebarMenu>{items.map(Menuitem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="text-white">
          <SidebarGroupContent>
            <SidebarMenu>{items1.map(Menuitem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="text-white">
          <SidebarGroupContent>
            <div className="mt-10 border border-blue-600 rounded-xl p-3 flex items-center gap-3 bg-white/5 hover:bg-white/10">
              <img
                src="/images/download.jpeg"
                alt="Zyan"
                className="w-10 h-10 rounded-full border border-white"
              />
              <div className="text-sm">
                <div className="font-semibold text-left">Zyan</div>
                <a href="#" className="text-xs text-white/70 hover:underline">
                  View Profile →
                </a>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
