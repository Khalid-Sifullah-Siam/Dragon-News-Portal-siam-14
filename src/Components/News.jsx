import NewsCard from "./NewsCard";

const News = async ({ id }) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const dataObject = await res.json();
    const datasArray = dataObject.data || [];

    return (
        <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-6">News by category</h2>

            {datasArray.length === 0 ? 
                <div role="alert" className="alert alert-soft alert-info">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 shrink-0 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>No news found in this category. Please try another one.</span>
                </div>
             : 
             <NewsCard datasArray={datasArray}/>
            }
        </div>
    );
};

export default News;
