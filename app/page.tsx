import Seperator from "@/components/Seperator";
import TopSection from "@/components/TopSection";
import TopRibbon from "@/components/topRibbon";
import HowWeWork from "@/components/HowWeWork";
import WhyWeAre from "@/components/WhyWeAre";
import Apply from "@/components/Apply";
import HappySteps from "@/components/StepsToHappiness"

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopRibbon />
      <TopSection />
      <Seperator />
      <HowWeWork />
      <Seperator />
      <WhyWeAre />
      <Seperator />
      <Apply />
      <HappySteps />
    </div>
  );
}
