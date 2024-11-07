"use client"
import { MessageSquare, PieChart, Users } from 'lucide-react';

const sidebarItems = [
  { icon: MessageSquare, label: 'Dashboard', isActive: true },
  { icon: PieChart, label: 'Analytics' },
  { icon: Users, label: 'Team' },
];

export function Sidebar() {

  return (
    <div className="w-64 bg-[#1e2139] text-white p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-8">Dashy</h1>
      <nav className="flex-1">
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 py-2 rounded-lg mb-2 transition-colors duration-200 ${
              item.isActive ? 'bg-[#2e3655] text-white' : 'text-[#8b8d97] hover:bg-[#2e3655] hover:text-white'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}