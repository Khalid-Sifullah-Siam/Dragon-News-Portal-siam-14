import Catagories from "@/Components/Catagories";
import News from "@/Components/News";
import SocialSiderbar from "@/Components/SocialSiderbar";


const NewsShowByCatagory = async ({params}) => {
    const {id} = await params;

    return (
        <div className='grid grid-cols-4 gap-6 my-20'>
            <Catagories id={id} />
            <News id={id} />
            <SocialSiderbar/>
        </div>
    );
};

export default NewsShowByCatagory;
