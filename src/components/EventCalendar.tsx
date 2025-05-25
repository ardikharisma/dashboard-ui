'use client'
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { id } from 'date-fns/locale';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const event = [
    {
        id: 1,
        title: "lorem ipsum dolor",
        time: "12:00 PM  -  20:00 PM",
        description: "lorem ipsum dolor bangetu sit amet consectur adipsingg elit",
    },
    {
        id: 2,
        title: "lorem ipsum dolor",
        time: "12:00 PM  -  20:00 PM",
        description: "lorem ipsum dolor bangetu sit amet consectur adipsingg elit",
    },
    {
        id: 3,
        title: "lorem ipsum dolor",
        time: "12:00 PM  -  20:00 PM",
        description: "lorem ipsum dolor bangetu sit amet consectur adipsingg elit",
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar
                className="py-3"
                onChange={onChange}
                value={value}
                locale="en-US"
            />
            <div className='flex items-center justify-between'>
                <h1 className='text-gray-800 text-lg font-semibold'>Event</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                {event.map(event => (
                    <div
                        className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'
                        key={event.id}
                    >
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <span className='mt-2 text-gray-300 text-sm'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar;
