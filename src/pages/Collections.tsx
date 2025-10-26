import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Collections</h1>
            <p className="text-muted-foreground">Manage your product collections</p>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Add Collection
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Summer Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">12 products</p>
              <Button variant="outline" size="sm">View Collection</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Arrivals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">8 products</p>
              <Button variant="outline" size="sm">View Collection</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Sellers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">15 products</p>
              <Button variant="outline" size="sm">View Collection</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
