import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-xl font-bold">LUXE</span>
            <span className="text-xs text-muted-foreground">ADMIN</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <NavLink 
              to="/collections" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`
              }
            >
              Collections
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`
              }
            >
              Products & Variants
            </NavLink>
            <NavLink 
              to="/orders" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`
              }
            >
              Orders
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
