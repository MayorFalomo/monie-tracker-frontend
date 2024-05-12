import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Centergrid from "@/components/centerpage/Centergrid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="homeContainer" className={`min-h-screen ${inter.className}`}>
      <Navbar />
      <Centergrid />
    </div>
  );
}
