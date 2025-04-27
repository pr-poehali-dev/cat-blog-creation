import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  likes: number;
  comments: number;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Как я освоил открывание дверей",
    excerpt: "Мои хозяева думали, что закрытая дверь меня остановит. Наивные...",
    date: "24 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    likes: 1250,
    comments: 86,
  },
  {
    id: "2",
    title: "Мое первое приключение на балконе",
    excerpt: "Этот большой мир за окном оказался еще интереснее, чем я думал!",
    date: "20 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
    likes: 980,
    comments: 42,
  },
  {
    id: "3",
    title: "Битва с пылесосом: кто кого?",
    excerpt: "Этот шумный монстр снова вторгся в мою территорию...",
    date: "15 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1043&q=80",
    likes: 1560,
    comments: 124,
  },
];

const LatestPosts = () => {
  return (
    <section className="py-12 bg-cat-accent/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Последние приключения</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Следите за моими ежедневными открытиями, играми и философскими размышлениями о жизни!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-cat-primary transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-cat-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-cat-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/posts/${post.id}`}>Читать</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/posts">Все истории</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
