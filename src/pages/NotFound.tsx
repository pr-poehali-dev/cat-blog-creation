import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container px-4 text-center">
          <div className="space-y-6">
            <div className="mx-auto w-32 h-32 rounded-full bg-cat-accent flex items-center justify-center">
              <span className="text-6xl">😿</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Мяу-404</h1>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
              Кажется, эта страница потерялась так же, как я иногда теряю свои игрушки под диваном.
              Может быть, мы сможем найти ее вместе?
            </p>
            <Button size="lg" asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
