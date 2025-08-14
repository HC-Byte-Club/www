export default function HowWeWorkAgain() {
    return (
        <div className="flex flex-col md:flex-row justify-between p-8 md:p-32 bg-[#9989FF]">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h1 className="text-xl md:text-6xl font-black text-black pb-8 tracking-tighter">
                    We find problems, <br />
                    Right here in Lucknow.
                </h1>
                <p className="text-xl md:text-2xl py-4">
                    We find places in Lucknow that require help with technology. We then give each person in the cohort a chance to solve these real-world problems.
                </p>
                <p className="text-xl md:text-2xl py-8">
                    We want to help kids build real world experience and not random filler projects.
                </p>
            </div>

            <div className="flex flex-col justify-end pt-8 md:pt-32 md:h-64">
                <ul className="flex flex-col justify-end gap-5 w-full md:w-72">
                    <li className="flex items-center text-2xl font-bold text-black ">
                        <span>How does it work</span>
                        <div className="flex-1 h-1 rounded-full bg-black ml-2"></div>
                    </li>
                </ul>
            </div>

        </div>
    )
}