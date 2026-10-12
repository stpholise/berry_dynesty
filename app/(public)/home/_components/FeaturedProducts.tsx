import LivestockCard from "@/app/_components/LivestockCard";
import { Product } from "@/types/sanity";
import { client } from "@/sanity/lib/client";
import { FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries";

const FeaturedProducts = async () => {
  const products: Product[] = await client.fetch(FEATURED_PRODUCTS_QUERY);

  return (
    <div className="grid 2xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products &&
        products.map((product, i) => (
          <LivestockCard
            product={product}
            key={product._id}
            data-aos={i % 2 == 0 ? "fade-left" : "fade-right"}
          />
        ))}
    </div>
  );
};

export default FeaturedProducts;
