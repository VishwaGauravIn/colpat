import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-4 flex w-full items-center justify-between">
      <Link href="/" className="flex items-center">
        <img src="logo.png" alt="" className="w-12 h-12" />
        <span className="text-3xl font-bold text-[#E2D59A]">ColPat</span>
      </Link>
      <div className="">{/* right side */}</div>
    </div>
  );
}