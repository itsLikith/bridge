'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreVertical, Phone, Video, Info } from 'lucide-react';

// Mock patient data - Replace with real data later
const patients: Record<string, { name: string; status: string }> = {
  p1: { name: 'John Smith', status: 'Active' },
  p2: { name: 'Maria Garcia', status: 'Active' },
  p3: { name: 'Ahmed Hassan', status: 'Active' },
  p4: { name: 'Li Wei', status: 'Active' },
  p5: { name: 'Emma Wilson', status: 'Active' },
  p6: { name: 'Carlos Rodriguez', status: 'Active' },
  p7: { name: 'Fatima Al-Mansouri', status: 'Active' },
  p8: { name: 'Yuki Tanaka', status: 'Active' },
};

export default function PatientChatPage() {
  const params = useParams();
  const router = useRouter();
  const patientId = params.patient as string;
  const patient = patients[patientId];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/services/patients');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  if (!patient) {
    return (
      <div className="flex h-full items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Patient not found</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">The patient you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Chat Header */}
      <div className="border-b border-border bg-card px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Avatar className="h-9 w-9 sm:h-10 sm:w-10 shrink-0">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patientId}`} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">{patient.name}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">{patient.status}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
              <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex h-9 w-9 p-0">
              <Info className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex flex-1 items-center justify-center bg-linear-to-b from-background to-muted/20 px-4">
        <div className="text-center max-w-md">
          <div className="mb-4 flex justify-center">
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patientId}`} />
              <AvatarFallback className="text-xl sm:text-2xl">{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{patient.name}</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Chat interface will be implemented here
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Messages, input area, and real-time translation coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
