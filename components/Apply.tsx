import Button from "./ui/Button";

export default function Apply() {
    return (
        <div className="flex flex-col p-8 md:p-32 bg-[#F9E1E4]">
            <div className="w-full md:w-1/2">
            <h1 className="text-xl md:text-6xl font-black text-black pb-8 tracking-tighter">
                Apply Today!
            </h1>
            <p className="text-xl md:text-2xl py-4">
                Our Fall 2025 cohort is starting soon! Apply if you want to solve real world problems, and build an awesome community.
            </p>
            </div>
            <Button size="lg" rounded="full" className="w-full md:w-1/4" buttonText="Apply Now" />
        </div>
    )
}