import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { urlFor } from "@/sanity/lib/image";

interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  image: string;
  title: string;
}
const Categories = async () => {
  const Categories: Category[] = await client.fetch(CATEGORIES_QUERY);

  return (
    <div className="grid grid-cols-1 2xs:grid-cols-2  md:grid-cols-4 justify-center  sm:justify-between gap-4 sm:gap-16">
      {Categories.slice(0, 4).map((category, i) => (
        <Link
          href={{
            pathname: `/livestock`,
            query: { category: category.slug.current },
          }}
          className={clsx(
            "border-2  hover:border-bright-green/50 transition duration-300 ease-in-ou group rounded-2xl bg-white p-4 flex flex-col gap-1 items-center",
            catBg[i].bg,
          )}

          data-aos={i % 2 == 0 ? "fade-left" : "fade-right"}
          key={i}
        >
          <div
            className={clsx(
              " rounded-full mx-auto relative flex items-center my-3 justify-center transition duration-300 ease-in-out ",
            )}
          >
          
           {category.image ? <Image
              src={urlFor(category.image).url()}
              width={180}
              height={180}
              alt={category.name || "category image"}
              className=" w-full bg-cover rounded-lg"
              unoptimized
            /> : <div  className=" w-full bg-cover rounded-lg bg-gray-400"
              ></div> }
          </div>
          <h6 className="text-black text-base font-semibold">
            {category.title}
          </h6>
        </Link>
      ))}
    </div>
  );
};

const catBg = [
  {
    bg: "bg-green-100/60 group-hover:bg-green-200/60",
  },
  {
    bg: "bg-amber-200/60 group-hover:bg-amber-300/70",
  },
  {
    bg: "bg-pink-200/60 group-hover:bg-pink-300/80",
  },
  {
    bg: "bg-orange-600/60 group-hover:bg-orange-600/80",
  },
];

export default Categories;
