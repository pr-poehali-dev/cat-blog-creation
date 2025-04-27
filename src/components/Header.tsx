import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-cat-primary to-cat-secondary bg-clip-text text-transparent">МурзиБлог</span>
          <span className="hidden sm:inline text-2xl">🐱</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-md font-medium transition-colors hover:text-cat-primary">
            Главная
          </Link>
          <Link to="/posts" className="text-md font-medium transition-colors hover:text-cat-primary">
            Блог
          </Link>
          <Link to="/gallery" className="text-md font-medium transition-colors hover:text-cat-primary">
            Фотогалерея
          </Link>
          <Link to="/about" className="text-md font-medium transition-colors hover:text-cat-primary">
            О Мурзике
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-cat-primary transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5 hover:text-cat-primary transition-colors" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <span className="text-lg hover:text-cat-primary transition-colors">📱</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-background p-6 flex flex-col">
            <nav className="flex flex-col gap-4 mb-8">
              <Link 
                to="/" 
                className="text-lg font-medium p-2 hover:bg-cat-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/posts" 
                className="text-lg font-medium p-2 hover:bg-cat-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
              <Link 
                to="/gallery" 
                className="text-lg font-medium p-2 hover:bg-cat-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Фотогалерея
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium p-2 hover:bg-cat-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                О Мурзике
              </Link>
            </nav>
            
            <div className="flex justify-center gap-8 mt-auto pb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <span className="text-2xl">📱</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
