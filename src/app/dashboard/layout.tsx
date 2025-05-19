import Menu from "@/components/Menu";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        {/* SIDEBAR */}
        <div className="w-[15%] md:w-[8%] lg:w-[15%] p-8">
            <Link href="/" className="flex justify-center items-center lg:justify-start">
            <Image src="/logo.png" width={32} height={24} alt="logo"/>
            <span className="hidden lg:block">Schoolardi</span>
            </Link>
            <Menu/>
        </div>
        {/* MAIN */}
        <div className="w-[85%] md:w-[92%] lg:w-[85%] bg-blue-50"></div>
    </div>
  );
}
