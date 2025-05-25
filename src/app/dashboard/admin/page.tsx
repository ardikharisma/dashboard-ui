import Announcement from "@/components/Announcement"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="w-full flex px-7 py-0 flex-col gap-6 md:flex-row">

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
          <div className="w-full flex lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex w-full lg:w3/3 h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* EVENT CALENDAR */}
        <EventCalendar/>
   
        {/* EVENT */}
        <Announcement/>
      </div>
      
    </div>
  )
}

export default AdminPage