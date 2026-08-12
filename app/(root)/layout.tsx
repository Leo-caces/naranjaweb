import { Header, Footer } from '@/components';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
    <div className="flex flex-col min-h-screen bg-white">
        <div className="relative h-auto">
            <Header />
        </div>
        <main className="flex-1 relative">{children}</main>
        <Footer />
    </div>
    )
}