import NewsDetails from "@/Components/NewsDetails";
import SocialSiderbar from "@/Components/SocialSiderbar";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const dataObject = await res.json();
    const dataArray = dataObject.data;
    const data = dataArray[0];

    return {
        title: data.title,
        Description: data.details
    };
};

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
