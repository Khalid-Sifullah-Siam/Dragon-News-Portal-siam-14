import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

  const news = [
    {
      id: 1,
      title: "New Technology Discovered in Bangladesh"
    },
    {
      id: 2,
      title: "Today's Weather Update"
    },
    {
      id: 3,
      title: "Latest Football World Cup News"
    }
  ];


  return (
    <div className='flex gap-4 bg-[#f3f3f3FF] p-4 mb-8'>

      <button className='bg-[#d72050FF] text-white text-xl font-medium px-6 py-2'>Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {
          news.map(item => <p key={item.id} className='text-lg text-[#403f3fFF] font-semibold'>{item.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;