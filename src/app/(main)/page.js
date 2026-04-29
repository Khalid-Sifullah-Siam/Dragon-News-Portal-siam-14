import Catagories from '@/Components/Catagories';
import SocialSiderbar from '@/Components/SocialSiderbar';
import React from 'react';

const HomePage = () => {
    return (
        <div className='grid grid-cols-4 gap-4 my-20'>
            
          <Catagories id={null}/>

            <div className='bg-blue-400 col-span-2'>
                news
            </div>
            <SocialSiderbar/>
        </div>
    );
};

export default HomePage;