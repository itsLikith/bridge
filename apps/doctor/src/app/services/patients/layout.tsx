'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Languages, Bell, Settings, User, Plus, Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ReactNode, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PatientChatLayoutProps {
  children: ReactNode;
}

// Mock patient chats data - Replace with real data later
const patientChats = [
  { id: 'p1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p1', name: 'John Smith', lastAppointment: 'Dec 30, 2025' },
  { id: 'p2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p2', name: 'Maria Garcia', lastAppointment: 'Dec 29, 2025' },
  { id: 'p3', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p3', name: 'Ahmed Hassan', lastAppointment: 'Dec 28, 2025' },
  { id: 'p4', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p4', name: 'Li Wei', lastAppointment: 'Dec 27, 2025' },
  { id: 'p5', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p5', name: 'Emma Wilson', lastAppointment: 'Dec 26, 2025' },
  { id: 'p6', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p6', name: 'Carlos Rodriguez', lastAppointment: 'Dec 24, 2025' },
  { id: 'p7', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p7', name: 'Fatima Al-Mansouri', lastAppointment: 'Dec 20, 2025' },
  { id: 'p8', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=p8', name: 'Yuki Tanaka', lastAppointment: 'Dec 15, 2025' },
];

export default function PatientChatLayout({ children }: PatientChatLayoutProps) {
  const pathname = usePathname();
  const currentPatientId = pathname.split('/').pop();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-9 w-9 p-0"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link
              href="/home"
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                <Languages className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground">Bridge</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <Link href="/notifications">
              <Button variant="ghost" size="sm" className="relative h-9 w-9 p-0">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/settings" className="hidden sm:inline-flex">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <Link href="/profile">
              <Button variant="outline" size="sm" className="gap-2 h-9">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - Patient Chats List */}
        <aside className={`fixed lg:relative inset-y-0 left-0 z-50 flex w-80 sm:w-96 lg:w-80 flex-col border-r border-border bg-card transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Sidebar Header */}
          <div className="border-b border-border p-3 sm:p-4">
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">Patient Chats</h2>
              <div className="flex items-center gap-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="lg:hidden h-8 w-8 p-0"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search patients..."
                className="pl-9"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {patientChats.map((chat) => {
              const isActive = currentPatientId === chat.id;
              return (
                <Link
                  key={chat.id}
                  href={`/services/patients/${chat.id}`}
                  className={`block border-b border-border transition-colors hover:bg-accent ${
                    isActive ? 'bg-accent' : ''
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4">
                    <Avatar className="h-9 w-9 sm:h-10 sm:w-10 shrink-0">
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <h3 className="text-sm sm:text-base font-medium text-foreground truncate">{chat.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">
                        Last appointment: {chat.lastAppointment}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
