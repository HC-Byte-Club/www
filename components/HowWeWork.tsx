import Image from "next/image";

export default function HowWeWork() {
    return (
        <div id="howwework" className="flex flex-col gap-8 p-8 text-3xl bg-[#9ee345] font-head md:px-10 lg:px-40 xl:px-95">
          <div className="font-head">
            <h2>3-4 hours per week,</h2>
            <h2>Real project work,</h2>
            <h2>Flexible scheduling.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>We ask for about 3-4 hours per week including team meetings, check-ins, and independent work. Weekly check-ins are short meetings with your team and organizers.</p>
            <p>Biweekly workshops provide skill sessions you'll actually use in your project. We get it — school comes first, so we're flexible with major conflicts and exam seasons.</p>
            <p className="text-inner-shadow opacity-50 font-bold font-body text-2xl text-[#9989FF]">how we work</p>
          </div>
        </div>
    )
}