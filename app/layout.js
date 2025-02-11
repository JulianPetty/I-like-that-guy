import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from '../components/Navbar';
import HeroSection from "@/components/HeroSection";
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Like That Guy",
  description: "Discussion and ponderings of guys we like, or maybe not so much?",
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
