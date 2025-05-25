import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className="w-full flex px-7 py-0 flex-col gap-6 md:flex-row">

      {/* LEFT */}
      <div className="lg:w-2/3 flex flex-col gap-8">
        <div className="bg-white rounded-md p-4 h-full">
          <h1 className="font-semibold text-lg">Schedulue</h1>
          <BigCalendar/>
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

export default StudentPage