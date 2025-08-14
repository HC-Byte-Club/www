import Seperator from "@/components/Seperator";
import TopSection from "@/components/TopSection";
import TopRibbon from "@/components/topRibbon";
import HowWeWork from "@/components/HowWeWork";
import HowWeWorkAgain from "@/components/HowWeWorkAgain";
import Apply from "@/components/Apply";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopRibbon />
      <TopSection />
      <Seperator />
      <HowWeWork />
      <Seperator />
      <HowWeWorkAgain />
      <Seperator />
      <Apply />
    </div>
  );
}
