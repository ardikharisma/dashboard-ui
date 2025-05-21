import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="w-full flex p-4 flex-col gap-4 md:flex-row">

      {/* LEFT */}
      <div className=" lg:w-2/3 flex flex-col gap-8">
        {/* USERCHART */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="student"/>
          <UserCard type="parent"/>
          <UserCard type="teacher"/>
          <UserCard type="staff"/>
        </div>
        {/* MIDDLE CHART */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* COUNT CHART */}
          <div className="w-full flex lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          {/* BAR CHART */}
          <div className="w-full  lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>
      </div>
      
      {/* RIGHT */}
      <div className="">r</div>
      
    </div>
  )
}

export default AdminPage