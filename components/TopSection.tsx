import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function TopSection() {
    return (
             <div className="flex flex-col p-5 gap-5 bg-[#f9e1e4] md:px-10 lg:px-40 xl:px-95">

        {/* hero section */}
        <div id="hero" className="flex flex-col gap-60 p-8 text-6xl bg-[#ffb632] font-head rounded-3xl">
          <h1>ByteClub</h1>
          <div className="flex flex-col gap-2 items-end">
            <a href="#whatbyteclub" className="font-body text-lg tracking-tighter">
              <InteractiveHoverButton><p className="">what's byteclub</p></InteractiveHoverButton>
            </a>
            <a href="#howwework" className="font-body text-lg tracking-tighter">
              <InteractiveHoverButton><p className="">how we work</p></InteractiveHoverButton>
            </a>
            <a href="#whyarewe" className="font-body text-lg tracking-tighter">
              <InteractiveHoverButton><p className="">why are we</p></InteractiveHoverButton>
            </a>
          </div>
        </div>

        {/* what's byteclub */}
        <div id="whatbyteclub" className="flex flex-col gap-8 p-8 text-3xl bg-[#f196e5] font-head rounded-3xl">
          <div className="font-head">
            <h2>Meet people,</h2>
            <h2>Build projects,</h2>
            <h2>Create communities.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>Join cohorts and communities of builders. We find problems in non-profits, local vendors, and more that are in lucknow.</p>
            <p>We team up with them to provide you opportunities to solve them. It’s your way to give back to the city that built you.</p>
            <p className="text-inner-shadow opacity-50 font-bold font-body text-2xl text-[#9989FF]">what's byteclub</p>
          </div>
        </div>
      </div>
  );
}
