import { AnimatedListDemo } from "@/components/Animated-List";
import Benifits from "@/components/Benifits";
import Card from "@/components/Card";
import Earning from "@/components/Earning";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen overflow-y-hidden overflow-x-hidden">
      <Hero/>
      <Earning/>
      <Benifits/>
      <Card/>
         
    </div>
  );
}
