import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-row gap-8 py-12 text-3xl bg-[#111] text-[#f9e1e4] items-center justify-center font-head md:px-10 lg:px-40 xl:px-95">
          <h1>ByteClub</h1>
          <p className="text-lg font-body tracking-tight">Copyright © 2025 ByteClub.</p>
        </div>
    )
}