import Image from "next/image";

export default function WhyWeAre() {
    return (
        <div id="whyarewe" className="flex flex-col gap-8 p-8 text-3xl bg-[#9989FF] font-head md:px-10 lg:px-40 xl:px-95">
          <div className="font-head">
            <h2>We partner with nonprofits,</h2>
            <h2>And community organizations.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>We find nonprofits and community organizations that need technology solutions. Each team in our cohort gets the chance to solve these real-world problems.</p>
            <p>This isn't about building random filler projects — it's about creating software that actually matters and helps real people in your community.</p>
            <p className="text-inner-shadow opacity-50 font-bold font-body text-2xl text-[#9989FF]">why are we</p>
          </div>
        </div>
    )
}