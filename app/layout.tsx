import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#0F1421] to-[#000000] text-white">
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
