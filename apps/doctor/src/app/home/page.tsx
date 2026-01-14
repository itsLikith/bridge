import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { WelcomeSection } from '@/components/dashboard/WelcomeSection';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { UpdatesSection } from '@/components/dashboard/UpdatesSection';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { ServicesSection } from '@/components/common/ServicesSection';

export default function HomePage() {
  return (
    <DashboardLayout>
      <WelcomeSection userName="Dr. Smith" isPro={false} />
      <StatsCards />
      <UpdatesSection />
      <ServicesSection />
      <RecentActivity />
    </DashboardLayout>
  );
}