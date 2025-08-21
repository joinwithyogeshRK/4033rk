import { Link } from 'react-router-dom';
import { Github, Twitter, Package } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-6 md:py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <span className="font-semibold">Lucide React Icons</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>A beautiful and consistent icon set for React applications.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/lucide-icons/lucide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://twitter.com/lucideicons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://www.npmjs.com/package/lucide-react" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">NPM</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucide Icons. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <a 
              href="https://lucide.dev/docs/introduction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://github.com/lucide-icons/lucide/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
