import Catagories from "@/Components/Catagories";
import News from "@/Components/News";
import SocialSidebar from "@/Components/SocialSidebar";


const NewsShowByCatagory = async ({params}) => {
    const {id} = await params;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 my-20'>
            <aside className='lg:col-span-1'>
                <Catagories id={id} />
            </aside>
            <main className='lg:col-span-2'>
                <News id={id} />
            </main>
            <aside className='lg:col-span-1'>
                <SocialSidebar/>
            </aside>
        </div>
    );
};

export default NewsShowByCatagory;
