'use client'
import Image from "next/image"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    uv: 106,
    pv: 2400,
    fill: '#ffffff',
  },
  {
    name: 'Girls',
    uv: 65,
    pv: 4567,
    fill: '#FAE27C',
  },
  {
    name: 'Boy',
    uv: 79,
    pv: 4567,
    fill: '#c3ebfa',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className='bg-white flex p-5 rounded-2xl flex-col'>
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium">Student</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className='relative w-full h-[75%]'>
            <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="uv"
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="flex justify-center gap-5">
            <div className="flex flex-col">
                <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                <h1>1,324</h1>
                <span className="text-[10px] font-medium text-gray-300">Boys (4%)</span>
            </div>
            <div className="flex flex-col">
                <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                <h1>1,324</h1>
                <span className="text-[10px] font-medium text-gray-300">Boys (4%)</span>
            </div>
        </div>
    </div>
  )
}

export default CountChart