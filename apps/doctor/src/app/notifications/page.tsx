'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, CheckCheck, MessageSquare, Calendar, UserPlus, AlertCircle, Trash2, Settings } from 'lucide-react';

// Mock notifications data - Replace with real data later
const notifications = [
  {
    id: '1',
    type: 'message',
    title: 'New message from Maria Garcia',
    description: 'When is my next appointment?',
    timestamp: '2 minutes ago',
    read: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
  },
  {
    id: '2',
    type: 'appointment',
    title: 'Appointment reminder',
    description: 'Appointment with John Smith tomorrow at 10:00 AM',
    timestamp: '1 hour ago',
    read: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  },
  {
    id: '3',
    type: 'alert',
    title: 'Urgent: Lab results available',
    description: 'Lab results for Ahmed Hassan are now available for review',
    timestamp: '3 hours ago',
    read: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed',
  },
  {
    id: '4',
    type: 'patient',
    title: 'New patient registration',
    description: 'Emma Wilson has been added to your patient list',
    timestamp: '5 hours ago',
    read: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
  },
  {
    id: '5',
    type: 'message',
    title: 'New message from Li Wei',
    description: 'The medication is working well, thank you!',
    timestamp: '1 day ago',
    read: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li',
  },
  {
    id: '6',
    type: 'appointment',
    title: 'Appointment cancelled',
    description: 'Carlos Rodriguez has cancelled the appointment scheduled for Dec 29',
    timestamp: '2 days ago',
    read: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'message':
      return <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'appointment':
      return <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'alert':
      return <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'patient':
      return <UserPlus className="h-4 w-4 sm:h-5 sm:w-5" />;
    default:
      return <Bell className="h-4 w-4 sm:h-5 sm:w-5" />;
  }
};

const getNotificationBadgeVariant = (type: string) => {
  switch (type) {
    case 'message':
      return 'info';
    case 'appointment':
      return 'warning';
    case 'alert':
      return 'destructive';
    case 'patient':
      return 'success';
    default:
      return 'default';
  }
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Notifications
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Stay updated with your latest activities and messages
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <CheckCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Mark all as read</span>
              <span className="sm:hidden">Mark all</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Total</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{notifications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Unread</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{unreadCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Messages</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {notifications.filter(n => n.type === 'message').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-950">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Appointments</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {notifications.filter(n => n.type === 'appointment').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader className="border-b border-border">
            <CardTitle className="text-lg sm:text-xl">Recent Notifications</CardTitle>
            <CardDescription className="text-sm">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-3 p-3 transition-colors hover:bg-accent sm:gap-4 sm:p-4 ${
                    !notification.read ? 'bg-muted/50' : ''
                  }`}
                >
                  <Avatar className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>
                      {notification.title.split(' ')[0].charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full ${
                          notification.type === 'message' ? 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400' :
                          notification.type === 'appointment' ? 'bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400' :
                          notification.type === 'alert' ? 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400' :
                          'bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400'
                        }`}>
                          {getNotificationIcon(notification.type)}
                        </div>
                        <h3 className="text-sm font-semibold text-foreground sm:text-base">
                          {notification.title}
                        </h3>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 sm:text-sm">
                      {notification.description}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge variant={getNotificationBadgeVariant(notification.type)} className="text-[10px] sm:text-xs">
                        {notification.type}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground sm:text-xs">
                        {notification.timestamp}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    {!notification.read && (
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <CheckCheck className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Empty state for when there are no notifications */}
        {notifications.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted sm:h-20 sm:w-20">
                <Bell className="h-8 w-8 text-muted-foreground sm:h-10 sm:w-10" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">No notifications</h3>
              <p className="text-center text-sm text-muted-foreground sm:text-base">
                You&apos;re all caught up! Check back later for new notifications.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}