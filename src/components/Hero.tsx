import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Декоративные элементы */}
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cat-primary/20 blur-3xl"></div>
      <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cat-secondary/20 blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Привет! Я — 
                <span className="bg-gradient-to-r from-cat-primary to-cat-secondary bg-clip-text text-transparent">
                  {" "}Мурзик
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Котик-блогер с миллионами подписчиков. Делюсь своей жизнью, приключениями и мудростью. 
                Моя миссия — делать мир ярче одним мяуканьем за раз!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="cat-paw-button" size="lg" asChild>
                <Link to="/posts">Мои истории</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/gallery">Фотогалерея</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-1">
                <span className="text-cat-primary text-2xl">750K</span> 
                <span className="text-muted-foreground">подписчиков</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-cat-primary text-2xl">1.2M</span> 
                <span className="text-muted-foreground">лайков</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-cat-primary text-2xl">325</span> 
                <span className="text-muted-foreground">постов</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] overflow-hidden rounded-full border-8 border-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Мурзик, кот-блогер"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
