import NewsDetails from "@/Components/NewsDetails";
import SocialSiderbar from "@/Components/SocialSiderbar";


const NewsDetailsPage = async ({params}) => {
    const {id} = await params;

    return (
        <div className='grid grid-cols-3 gap-6 my-20'>
            <NewsDetails id={id} />
            <SocialSiderbar/>
        </div>
    );
};

export default NewsDetailsPage;
