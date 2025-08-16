import Image from "next/image";

export default function WhyWeAre() {
    return (
        <div id="whyarewe" className="flex flex-col gap-8 p-8 text-3xl bg-[#9989FF] font-head md:px-10 lg:px-40 xl:px-95">
          <div className="font-head">
            <h2>We find problems,</h2>
            <h2>Right here in Lucknow.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>We find places in Lucknow that require help with technology. We then give each person in the cohort a chance to solve these real-world problems.</p>
            <p>We want to help kids build real world experience and not random filler projects.</p>
            <p className="text-inner-shadow opacity-50 font-bold font-body text-2xl text-[#9989FF]">why are we</p>
          </div>
        </div>
    )
}