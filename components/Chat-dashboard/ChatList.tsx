"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const chatList = [
  { id: 1, name: 'Brandon Rogers', message: "That's exactly how I felt 😊", time: 'Just Now', isActive: true },
  { id: 2, name: 'David Abraham', message: 'Thanks a lot brate!', time: 'Just Now' },
  { id: 3, name: 'Monalisa', message: 'Nullam quis ante. Etiam sit amet orci eget', time: '08.01' },
  { id: 4, name: 'Eliza', message: 'ok ill check that later', time: '12.32' },
  { id: 5, name: 'Greali', message: 'ok noted, thanks 👍', time: '14.25' },
]

export function ChatList() {
  return (
    <div className="w-80 border-r border-[#2e3655] flex flex-col h-full">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">Message</h2>
        <Button className="w-full mb-4 bg-[#7367f0] hover:bg-[#7367f0]/90 text-white">
          New Chat <span className="ml-2">+</span>
        </Button>
      </div>
      <ScrollArea className="flex-1">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-4 cursor-pointer transition-colors duration-200 ${
              chat.isActive ? 'bg-[#2e3655]' : 'hover:bg-[#2e3655]'
            }`}
          >
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="/placeholder.svg" alt={chat.name} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white truncate">{chat.name}</h3>
              <p className="text-sm text-[#8b8d97] truncate">{chat.message}</p>
            </div>
            <span className="text-xs text-[#8b8d97]">{chat.time}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}