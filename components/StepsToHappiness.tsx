import Image from "next/image";

export default function StepsToHappiness() {
    return (
      <div className="flex flex-col p-5 bg-[#f9e1e4] md:px-10 lg:px-40 xl:px-95">
        <div className="flex flex-col gap-5 text-4xl font-head">
          <h1>The journey to impact:</h1>
          <div className="flex flex-col gap-2 items-start bg-[#FF4141] text-[#f9e1e4] p-5 rounded-3xl">
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Apply by August 31, 2025 at 11:59 PM IST</p>
            </div>
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Join your 5-6 person team and start building</p>
            </div>
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Create real impact for nonprofits and communities</p>
            </div>
          </div>
        </div>
      </div>
  );
}
