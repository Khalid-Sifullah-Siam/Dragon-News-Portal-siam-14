import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { IoIosStar } from 'react-icons/io';
import { IoEyeSharp } from 'react-icons/io5';

const NewsCard = ({ datasArray }) => {
  return (
    <div className="space-y-6">
      {datasArray.map(data => (
        <div key={data._id} className="card card-border bg-base-100">


          <div className='flex flex-col sm:flex-row justify-between p-6 bg-slate-200 rounded-md gap-4'>

            <div className='flex items-center gap-4 justify-center sm:justify-start'>
              <Image
                src={data.author.img}
                alt={data.author.name} width={40} height={40} className='rounded-full' />

              <div className='text-left'>
                <h2 className='font-semibold'>{data.author.name}</h2>
                <p className='text-[#706f6fFF] text-xs'>{data.author.published_date}</p>
              </div>
            </div>

            <div className='flex gap-4 justify-center sm:justify-end'>

              <CiBookmark className='text-xl cursor-pointer' />
              <CiShare2 className='text-xl cursor-pointer' />
            </div>


          </div>
          <div className="card-body text-center lg:text-left">
            <h2 className="card-title justify-center lg:justify-start">{data.title}</h2>
            <Image
              src={data.image_url}
              alt={data.author.name} width={400} height={400} className='w-full my-2' />
            <p className='text-[#706f6fFF] line-clamp-3'>{data.details}</p>
            <Link href={`/newsdetails/${data._id}`} className='text-orange-400 font-bold block'>Read more</Link>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
              <div className='flex gap-3'>
                <div className='flex gap-1'>
                    <IoIosStar className='text-orange-500 text-xl' />
                    <IoIosStar className='text-orange-500 text-xl' />
                    <IoIosStar className='text-orange-500 text-xl' />
                    <IoIosStar className='text-orange-500 text-xl' />
                    <IoIosStar className='text-orange-500 text-xl' />
                </div>

                <p>{data.rating.number}</p>
              </div>

              <div className='flex gap-3'>
                <IoEyeSharp className='text-xl' />
                <p>{data.total_view}</p>
              </div>

            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default NewsCard;