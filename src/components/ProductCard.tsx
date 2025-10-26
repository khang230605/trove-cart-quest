import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-2xl font-bold text-accent">${price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
