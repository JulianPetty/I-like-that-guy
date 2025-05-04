import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from '../components/Navbar';
import HeroSection from "@/components/HeroSection";
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beyond The Last Man",
  description: "Discussion and ponderings of this, that, and the other.",
  icons: {
    icon: '/church-solid.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
