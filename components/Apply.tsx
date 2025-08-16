import Button from "./ui/Button";

export default function Apply() {
    return (
        <div className="flex flex-col gap-4 p-8 bg-[#F9E1E4] md:px-10 lg:px-40 xl:px-95">
            <h1 className="text-4xl font-head tracking-tight">Apply Today.</h1>
            <p className="flex flex-col text-lg font-body tracking-tighter">Our Fall 2025 cohort is starting soon! Apply if you want to solve real world problems, and build an awesome community</p>
            <button className="px-6 py-3 w-fit h-fit font-head tracking-tight text-2xl text-[#F9E1E4] bg-[#000] rounded-2xl">
                Apply Now
            </button>
        </div>
    )
}