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
      <body>
        <Toast />
        <CommonNav />
        <main className="px-5 lg:px-32 pt-2">{children}</main>
      </body>
    </html>
  );
}
