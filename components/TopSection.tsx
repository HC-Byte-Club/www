import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function TopSection() {
    return (
             <div className="flex flex-col p-5 gap-5 bg-[#f9e1e4] md:px-10 lg:px-40 xl:px-95">

        {/* hero section */}
        <div id="hero" className="flex flex-col gap-60 p-8 text-6xl bg-[#ffb632] font-head rounded-3xl">
          <h1>ByteClub Cohorts</h1>
          <div className="flex flex-col gap-2 items-end">
            <a href="#whatbyteclub" className="font-body text-lg tracking-tighter">
              <InteractiveHoverButton><p className="">what's byteclub cohorts</p></InteractiveHoverButton>
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
            <h2>Build real-world software,</h2>
            <h2>Learn by doing,</h2>
            <h2>Create meaningful impact.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>ByteClub Cohorts is a 3-month program made for coders at any skill level, where small, diverse teams of high school students build real-world software for nonprofits and community organizations.</p>
            <p>You'll work in a team of 5-6 students, make something that actually matters, learn by doing (not just watching tutorials), and leave with skills, stories, and impact you can be proud of.</p>
            <p className="text-inner-shadow opacity-50 font-bold font-body text-2xl text-[#9989FF]">what's byteclub cohorts</p>
          </div>
        </div>
      </div>
  );
}
