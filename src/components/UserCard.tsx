import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
        <div className="flex justify-between">
            <span className="bg-white p-1 px-2 rounded-md xl text-[10px]">2022/25</span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1 className="text-xl font-semibold my-4">4,345</h1>
        <h2 className="text-xs text-gray-700 capitalize font-medium">{type}</h2>

    </div>
  )
}

export default UserCard