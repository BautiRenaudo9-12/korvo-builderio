import { ReactNode } from 'react';
import { BusinessSideNav } from './BusinessSideNav';
import { BusinessHeader } from './BusinessHeader';

interface BusinessLayoutProps {
  children: ReactNode;
}

export const BusinessLayout = ({ children }: BusinessLayoutProps) => {
  return (
    <div className="w-full h-[100dvh] bg-black flex flex-col">
      {/* Mobile Header */}
      <BusinessHeader />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Desktop) */}
        <BusinessSideNav />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto md:ml-64 w-full">
          <div className="w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
