import Image from "next/image";

export default function StepsToHappiness() {
    return (
      <div className="flex flex-col p-5 bg-[#f9e1e4]">
        <div className="flex flex-col gap-5 text-4xl font-head">
          <h1>The steps to happiness:</h1>
          <div className="flex flex-col gap-2 items-start bg-[#FF4141] text-[#f9e1e4] p-5 rounded-3xl">
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Join a team.</p>
            </div>
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Do prompt meetings and build together.</p>
            </div>
            <div className="flex gap-2 text-lg w-fit font-bold font-body tracking-tighter items-center justify-center">
              <div className="bg-[#f9e1e4] w-2 h-2 rounded-full"></div>
              <p>Do good in and for society.</p>
            </div>
          </div>
        </div>
      </div>
  );
}
