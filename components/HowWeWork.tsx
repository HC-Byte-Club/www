export default function HowWeWork() {
    return (
        <div className="flex flex-row justify-between p-8 md:p-32 bg-[#9EE345]">
            <div className="w-full md:w-1/2">
                <h1 className="text-xl md:text-6xl font-black text-black pb-8 tracking-tighter">
                    Cool people. <br />
                    Real problems. <br />
                    Awesome solutions.
                </h1>
                <p className="text-xl md:text-2xl py-4">
                    We’re tired of all the tech clubs that don’t have any real applicative experience. That’s why byteclub exists.
                </p>
                <p className="text-xl md:text-2xl py-8">
                    We envision ByteClub to be the place where kids get guidance and help solve real problems for people literally around them.
                </p>
            </div>

            <div className="flex flex-col justify-end pt-8 md:pt-32 md:h-64">
                <ul className="flex flex-col justify-end gap-5 w-16 md:w-72">
                    <li className="flex items-center text-2xl font-bold text-black ">
                        <span>How does it work</span>
                        <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
                    </li>
                </ul>
            </div>

        </div>
    )
}