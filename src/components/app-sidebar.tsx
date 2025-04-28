import * as React from "react"
import {
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Johnvic Dela Cruz",
    email: "delacruzjohnvic21@gmail.com",
    avatar: ''
  },

  navMain: [
    {
      title: "Phase 1 Applications",
      url: "#",
      isActive: true,
      icon: "SquareTerminal",
      items: [
        {
          title: "Todo",
          url: "/phase_1/todo",
        },
        {
          title: "Weather",
          url: "/phase_1/weather",
        },
        {
          title: "Tic Tac Toe",
          url: "/phase_1/tictactoe",
        },
        {
          title: "User Form",
          url: "/phase_1/userform",
        },
      ],
    },
  ],
}

// Sidebar Component with props typing
export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Next.js Roadmap</span>
                  <span>Since 2025-04</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      {/* Sidebar Content */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      {/* Sidebar Footer with user info */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      {/* Sidebar Rail */}
      <SidebarRail />
    </Sidebar>
  )
}
