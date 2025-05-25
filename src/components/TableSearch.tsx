import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex flex-row ring-[1.5px] rounded-full ring-gray-300 px-3 gap-1 text-xs items-center">
        <Image src="/search.png" width={14} height={14} alt="" />
        <input type="text" placeholder="Search....." className="w-[200px] bg-transparent outline-none p-2" />
    </div>    
  )
}

export default TableSearch