import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-6">
        {/* SIDE SEARCH */}
        <div className="hidden md:flex ring-[1.5px] rounded-full ring-gray-300 px-3 gap-1 text-xs items-center">
            <Image src="/search.png" width={14} height={14} alt="" />
            <input type="text" placeholder="Search....." className="w-[200px] bg-transparent outline-none p-2" />
        </div>
        {/* RIGHT USER AND NOTIFICATION */}
        <div className="flex items-center gap-6">
            <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 cursor-pointer">
                <Image src="/message.png" width={20} height={20} alt="" className="" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 cursor-pointer relative">
                <Image src="/announcement.png" width={20} height={20} alt="" className="" />
                <div className="absolute -top-3 -right-3 w-5 h-5 flex bg-purple-400 rounded-full justify-center items-center text-white text-xs">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Jhon Deo</span>
                <span className="text-[10px] text-gray-400 text-right ">Admin</span>
            </div>
            <Image src="/avatar.png" width={36} height={36} alt="" className="rounded-full" />
        </div>
    </div>
  )
}

export default Navbar