import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = async ({id}) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const dataObject = await res.json();
    const dataArray = await dataObject.data;
    const data = dataArray[0];
    return (
        <div className='col-span-2'>
            <h2 className='font-semibold mb-5'>News Details</h2>

            <div className='border border-[#e7e7e7FF] rounded-md space-y-6 p-8'>

                <Image src={data.image_url} width={400} height={400} alt='image' className='mx-auto mb-6 w-full' />

                <p className='text-2xl font-bold'>{data.title}</p>
                <p className='text-[#706f6fFF]'>{data.details}</p>
                <Link href={`/newscatagory/${data.category_id}`} className="btn bg-[#d72050FF] text-white text-xl font-medium px-6 py-2"><FaArrowLeft />All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDetails;