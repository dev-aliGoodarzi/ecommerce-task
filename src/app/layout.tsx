// Next
import type { Metadata } from "next";
// Next

// CSS
import "./globals.css";
import "./../tailwindCssFileForAttach.css";
// CSS

// Components
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
// Components

// MetaData
export const metadata: Metadata = {
  title: "Ali Goodarzi",
  description: "test desc",
};
// MetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full  items-center relative max-w-[1280px]"
        style={{ margin: "0 auto" }}
      >
        <Header />
        <div className="min-h-screen">
          {/* Header */}
          {children}
          {/* Main Content */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
