"use client"
import Image from "next/image"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
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
        <div className="flex justify-between">
            <span className="text-xs font-medium">Student</span>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className="w-full h-[75%]">
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    dataKey="uv"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>
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