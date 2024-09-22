import type { Metadata } from "next"
import {Roboto} from "next/font/google"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Header from "@/components/Header"
import "./globals.css"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const roboto = Roboto({subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container">
        {children}
        </main>
        <ToastContainer />
      </body>
    </html>
    </ClerkProvider>
  );
}
