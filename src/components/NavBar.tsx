import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Book, 
  UserPlus,
  Menu,
  X
} from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="nomad-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-rounded font-semibold text-nomad-dark">The English Nomadd</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-nomad-light font-medium flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-nomad-light font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-nomad-light font-medium flex items-center gap-1">
              <Book className="h-4 w-4" />
              <span>Blog</span>
            </Link>
            <a
              href="https://preply.com/en/?pref=NDA1NTk1Nw==&id=1752497948.153102&ep="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-nomad-light hover:bg-nomad-dark flex items-center gap-1">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
            </a>

          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-nomad-light px-3 py-2 rounded-md font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-nomad-light px-3 py-2 rounded-md font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-nomad-light px-3 py-2 rounded-md font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Book className="h-4 w-4" />
                <span>Blog</span>
              </Link>
              <div className="px-3 py-2">
                <Link to="/signup" className="w-full">
                  <Button className="w-full bg-nomad-light hover:bg-nomad-dark flex items-center justify-center gap-1">
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;