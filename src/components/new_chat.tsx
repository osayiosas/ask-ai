import React from 'react'
import { SidebarMenuItem } from './ui/sidebar'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

export const NewChat = () => {
  return (
    <SidebarMenuItem >
      <Button variant="outline" className="w-full">
        <PlusIcon className="-mr-2 size-4" />
        New Chat
      </Button>
    </SidebarMenuItem>
  );
}
