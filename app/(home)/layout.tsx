import { NavBar } from "@/components/Navbar"
import { Footer } from "@/components/footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <main className="pt-16 bg-gray-900 flex flex-col min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}
