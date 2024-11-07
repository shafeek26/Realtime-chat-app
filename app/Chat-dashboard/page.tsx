"use client"

import { useState } from 'react'
import { Bell, Menu, Search, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from '@/components/Chat-dashboard/Sidebar'
import { ChatList } from '@/components/Chat-dashboard/ChatList'
import { ChatWindow } from '@/components/Chat-dashboard/ChatWindow'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#151a30] text-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-[#1e2139]">
          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8b8d97]" />
              <Input className="w-64 bg-[#2e3655] pl-10 text-white placeholder-[#8b8d97] border-none" placeholder="Search messages, threads, groups..." />
            </div>
            <Button variant="ghost" size="icon" className="text-[#8b8d97] hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#8b8d97] hover:text-white">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 flex overflow-hidden">
          <ChatList />
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}