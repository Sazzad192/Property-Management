import Footer from "@/components/Footer";
import "./globals.css";
import CommonNav from "@/components/navigation/CommonNav";
import Toast from "@/components/providers/Toast";

export const metadata = {
  title: "Property Management",
  description: "Property management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full">
        <Toast />
        <CommonNav />
        <main className="min-h-[calc(100vh-180px)] px-5 lg:px-32 pt-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
