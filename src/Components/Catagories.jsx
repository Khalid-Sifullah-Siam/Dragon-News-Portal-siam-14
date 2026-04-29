import Link from "next/link";

const Catagories = async ({ id }) => {

  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  const catagories = data.data.news_category;

  return (
    <div>
      <h2 className="font-semibold text-xl text-[#403f3f] mb-5">
        All Categories
      </h2>

      <ul>
        {
          catagories.map(category => (
            <li
              key={category.category_id}
              className={`font-semibold text-lg list-none mb-7 cursor-pointer text-center bg-slate-100 rounded-md p-2 ${
                category.category_id === id ? 'text-red-600' : ''
              }`}
            >
              <Link href={`/category/${category.category_id}`} className="block">
                {category.category_name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Catagories;