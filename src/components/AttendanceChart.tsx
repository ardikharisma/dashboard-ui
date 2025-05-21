'use client'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Thue',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 80,
    absent: 70,
  },
  {
    name: 'Thu',
    present: 100,
    absent: 80,
  },
  {
    name: 'Fri',
    present: 120,
    absent: 100,
  },
  {
    name: 'Sat',
    present: 140,
    absent: 110,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white flex p-5 rounded-2xl flex-col'>
        <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium">Student</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#dddddd' />
          <XAxis dataKey="name" axisLine={false} className='text-xs' tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} className='text-xs' />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
          <Bar dataKey="present" radius={[10,10,0,0]} fill="#FAE27C" legendType='circle' />
          <Bar dataKey="absent" radius={[10,10,0,0]} fill="#C3EBFA"  legendType='circle' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart