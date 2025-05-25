import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, role,} from "@/lib/data"
import { tr } from "date-fns/locale"
import Image from "next/image"
import Link from "next/link"

type Assignment = {
    id:number;
    subject:string;
    class:string;
    teacher:string; 
    dueDate:string;
}

const columns =[
    {
        header:"Subject Name",
        accessor : "name",
    },
    {
        header:"Class",
        accessor : "class",    
    },
    {
        header:"Teacher",
        accessor : "teacher", 
        className: "hidden md:table-cell",    
    },
    {
        header:"Due Date",
        accessor : "dueDate", 
        className: "hidden md:table-cell",    
    },
    {
        header:"Action",
        accessor : "action",   
    }
]

const ListAssignment = () => {
    const renderRow = (item: Assignment) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <h3>{item.subject}</h3>
            </td>
            <td className="md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.dueDate}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teacher/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                        <Image src="/edit.png" alt="" width={16} height={16} />
                    </button>
                    </Link>
                    {role==="admin" && (
                        <Link href={`/list/teacher/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                        <Image src="/delete.png" alt="" width={16} height={16} />
                    </button>
                    </Link>
                    )}
                </div>
            </td>
         </tr>   
    )
    
  return (
    <div className='flex flex-col gap-4 p-4 mx-8 bg-white rounded'>
        {/* TOP */}
        <div className="-xl w-full h-full flex justify-between">
            <h1 className="hidden md:block text-semibold text-lg">All Assignments</h1>
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
                <TableSearch/>
                <div className="flex gap-2">
                    <button className="px-2 py-2 rounded-2xl bg-yellow-300">
                        <Image src="/filter.png" alt="" width={14} height={14}/>
                    </button>
                     <button className="px-2 py-2 rounded-2xl bg-yellow-300">
                        <Image src="/sort.png" alt="" width={14} height={14}/>
                    </button>
                    {role==="admin" && (
                     <button className="px-2 py-2 rounded-2xl bg-yellow-300">
                        <Image src="/plus.png" alt="" width={14} height={14}/>
                    </button>           
                    )}                           
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

        {/* PAGINATION */}
        <Pagination/>
    </div>
  )
}

export default ListAssignment