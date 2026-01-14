import { MessageSquare } from 'lucide-react';

export default function PatientsPage() {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="text-center max-w-md">
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-muted">
            <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground">No Chat Selected</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Select a patient from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
}
