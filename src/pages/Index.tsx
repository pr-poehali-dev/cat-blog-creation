import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Footer from "@/components/Footer";
import { Instagram, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LatestPosts />
        <section className="py-16 container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 bg-cat-accent/30 rounded-xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Ежедневные истории</h3>
              <p className="text-muted-foreground">Следи за моими приключениями каждый день в социальных сетях</p>
            </div>
            <div className="text-center p-6 bg-cat-secondary/20 rounded-xl">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">Видео контент</h3>
              <p className="text-muted-foreground">Смотри мои забавные видео на YouTube и TikTok каждую неделю</p>
            </div>
            <div className="text-center p-6 bg-cat-primary/20 rounded-xl">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2">Эксклюзивы</h3>
              <p className="text-muted-foreground">Подпишись на рассылку и получай эксклюзивный контент от Мурзика</p>
            </div>
          </div>
        </section>
        <section className="py-12 bg-cat-light">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Давай дружить!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Подписывайся на мои социальные сети и следи за моими приключениями каждый день!
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <span className="text-lg">📱</span>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
