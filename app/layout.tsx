import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Provider from "@/context/ClientContext";
import { Toaster } from "react-hot-toast";
import Auth from "./auth/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop it",
  description: "An online shop app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar session={!!session} />

          {session ? (
            <Provider session={session}>{children}</Provider>
          ) : (
            <Auth />
          )}

          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
