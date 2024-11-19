import { Sidebar } from "lucide-react"
import { SidebarContent, SidebarHeader, SidebarMenu } from "./sidebar"


export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          {/* New chat Button*/} 
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        
      </SidebarContent>
    </Sidebar>
  )
}
