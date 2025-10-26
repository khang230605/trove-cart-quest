import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299,
    image: product1,
  },
  {
    id: 2,
    title: "Classic Leather Watch",
    price: 449,
    image: product2,
  },
  {
    id: 3,
    title: "Modern Backpack",
    price: 189,
    image: product3,
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    price: 249,
    image: product4,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground">
            Handpicked selection of our finest offerings
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
