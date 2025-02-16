import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

// Menu items.
const items = [
  {
    title: "Post blog",
    url: "/admin/post-blog",
    icon: Home,
  },
  {
    title: "Delete blog",
    url: "/admin/deleteblog",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-20">
            <SidebarMenu className="border-0">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
