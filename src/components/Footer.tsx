import { Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-cat-primary to-cat-secondary bg-clip-text text-transparent">МурзиБлог</span>
              <span className="text-xl">🐱</span>
            </Link>
            <p className="text-muted-foreground">
              Мурзик — кот-блогер с характером. Делюсь своей жизнью, мудростью и показываю мир глазами котика.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cat-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cat-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-cat-primary transition-colors" aria-label="TikTok">
                <span className="text-lg">📱</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Разделы</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm hover:text-cat-primary transition-colors">Главная</Link>
                </li>
                <li>
                  <Link to="/posts" className="text-sm hover:text-cat-primary transition-colors">Блог</Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-sm hover:text-cat-primary transition-colors">Фотогалерея</Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm hover:text-cat-primary transition-colors">О Мурзике</Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Поддержка</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-sm hover:text-cat-primary transition-colors">Связаться</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm hover:text-cat-primary transition-colors">Частые вопросы</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm hover:text-cat-primary transition-colors">Конфиденциальность</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Подпишись на обновления</h3>
            <p className="text-sm text-muted-foreground">
              Получай свежие истории и анонсы прямо на почту!
            </p>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Твой email"
                  className="w-full rounded-md border bg-background py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cat-primary"
                />
              </div>
              <button
                className="rounded-md bg-cat-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cat-primary/90"
              >
                Подписаться
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} МурзиБлог. Все права защищены. Сделано с ❤️ лапками Мурзика.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
