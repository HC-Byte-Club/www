import Image from "next/image";

export default function HowWeWork() {
    return (
        <div className="flex flex-col gap-8 p-8 text-3xl bg-[#9ee345] font-head md:px-10 lg:px-40 xl:px-95">
          <div className="font-head">
            <h2>Cool people,</h2>
            <h2>Real problems,</h2>
            <h2>Awesome solutions.</h2>
          </div>
          <div className="flex flex-col text-xl font-body gap-8 tracking-tighter">
            <p>We’re tired of all the tech clubs that don’t have any real applicative experience. That’s why byteclub exists.</p>
            <p>We envision ByteClub to be the place where kids get guidance and help solve real problems for people literally around them.</p>
            <Image
              src="/section/howdowework.svg"
              alt="How we work"
              width={200}
              height={200}
              className="w-fit h-5"
            />
          </div>
        </div>
    )
}