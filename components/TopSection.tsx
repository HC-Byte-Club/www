import Image from "next/image";

export default function TopSection() {
    return (
<div className="flex flex-col p-8 md:p-32 bg-[#F9E1E4]">
<div className="w-full">
  <div className="flex flex-col md:flex-row justify-between p-8 md:pt-32 md:pb-32 md:pl-32 bg-[#FFB632] rounded-t-4xl">
    <h1 className="text-4xl md:text-8xl font-black text-black">ByteClub</h1>
    <div className="flex flex-col justify-end pt-8 md:pt-32 md:h-64">
      <ul className="flex flex-col justify-end gap-5 w-16 md:w-72">
        <li className="flex items-center text-2xl font-bold text-black">
          <span>What is ByteClub</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li>
        <li className="flex items-center text-2xl font-bold text-black">
          <span>How does it work</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li>
        <li className="flex items-center text-2xl font-bold text-black">
          <span>Why are we</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li>
      </ul>
    </div>
  </div>
  <div className="w-full mt-[-1px]">
    <Image
      src="/wave.svg"
      alt="Wavy border"
      width={1720}
      height={189}
      className="w-full"
    />
  </div>
</div>


<div className="w-full pt-16">

  <div className="w-full mb-[-1px]">
    <Image
      src="/waveDown.svg"
      alt="Wavy border"
      width={1720}
      height={189}
      className="w-full"
    />
  </div>

  <div className="flex flex-col md:flex-row justify-between p-8 md:pb-32 md:pl-32 bg-[#F196E5] rounded-b-4xl">
    <div className="w-full md:w-1/2">
      <h1 className="text-xl md:text-6xl font-black text-black pb-8 tracking-tighter">
        Meet people, <br />
        Build projects, <br />
        Create communities.
      </h1>
      <p className="text-xl md:text-2xl py-4">
        Join cohorts and communities of builders. We find problems in non-profits, local vendors, and more that are in lucknow.
      </p>
      <p className="text-xl md:text-2xl py-8">
        We team up with them to provide you opportunities to solve them. It’s your way to give back to the city that built you.
      </p>
    </div>
    <div className="flex flex-col justify-end pt-8 md:pt-32 md:h-64">
      <ul className="flex flex-col justify-end gap-5 w-16 md:w-72">
        <li className="flex items-center text-2xl font-bold text-black ">
          <span>What is ByteClub</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li>
        {/* <li className="flex items-center text-2xl font-bold text-black">
          <span>How does it work</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li>
        <li className="flex items-center text-2xl font-bold text-black">
          <span>Why are we</span>
          <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
        </li> */}
      </ul>
    </div>
  </div>

</div>
    </div>
  );
}
