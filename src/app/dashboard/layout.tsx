import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr]">
            <DashboardSidebar />
            <div className="flex flex-col dashboard-content-glass">
                <main className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
