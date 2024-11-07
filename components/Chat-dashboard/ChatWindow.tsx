"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, SendHorizontal } from 'lucide-react'

const messages = [
  { id: 1, sender: 'Brandon Rogers', content: "Yo sup bro 👋", time: '07:20 PM' },
  { id: 2, sender: 'Brandon Rogers', content: "What's your favorite movie?", time: '07:20 PM' },
  { id: 3, sender: 'You', content: "It's the funniest movie that I've ever seen. You should definitely watch it!", time: '07:20 PM' },
  { id: 4, sender: 'Brandon Rogers', content: "Yes, I saw that movie the first day it came out in theaters.", time: '07:20 PM' },
  { id: 5, sender: 'You', content: "Didn't you laugh through the whole movie? I did.", time: '07:20 PM' },
  { id: 6, sender: 'Brandon Rogers', content: "Me too. That movie brought tears to my eyes from laughing so hard.", time: '07:20 PM' },
]

export function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-[#2e3655]">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="/placeholder.svg" alt="Brandon Rogers" />
            <AvatarFallback>BR</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">Brandon Rogers</h3>
            <p className="text-sm text-[#8b8d97]">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-[#8b8d97] hover:text-white">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}>
            <div className={`inline-block p-3 rounded-lg ${
              message.sender === 'You' ? 'bg-[#7367f0] text-white' : 'bg-[#2e3655] text-white'
            }`}>
              <p>{message.content}</p>
            </div>
            <p className="text-xs text-[#8b8d97] mt-1">{message.time}</p>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-[#2e3655] flex items-center space-x-3">
        <Input className="w-full bg-[#2e3655] text-white placeholder-[#8b8d97] border-none" placeholder="Type a message..." />
        <SendHorizontal className="h-6 w-6" />
      </div>
    </div>
  )
}