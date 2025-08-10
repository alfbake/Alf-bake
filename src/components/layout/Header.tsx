import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-emblem.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-transparent">
      <div className="container flex flex-col items-center justify-center gap-2 py-3">
        <div className="relative w-full flex items-center justify-center">
          {/* Left navigation (desktop) */}
          <nav aria-label="Main" className="absolute left-0 hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/" className={({isActive}) => isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}>Home</NavLink>
            <NavLink to="/alfbake/ourstory" className={({isActive}) => isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}>Our Story</NavLink>
          </nav>

          {/* Center logo + name */}
          <Link to="/" className="flex items-center gap-3" aria-label="ALFBAKE Home">
            <img src={logo} alt="ALFBAKE emblem logo" className="h-10 w-10" loading="eager" />
            <span className="font-heading text-lg tracking-widest text-foreground">ALFBAKE</span>
          </Link>

          {/* Right navigation (desktop) */}
          <nav aria-label="Secondary" className="absolute right-0 hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/alfbake/contact-us" className={({isActive}) => isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}>Contact</NavLink>
          </nav>

          {/* Mobile menu */}
          <div className="absolute right-0 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="hero" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-border">
                <div className="mt-8 flex flex-col gap-6 text-lg">
                  <Link to="/" className="text-foreground hover:text-foreground">Home</Link>
                  <Link to="/alfbake/ourstory" className="text-foreground hover:text-foreground">Our Story</Link>
                  <Link to="/alfbake/contact-us" className="text-foreground hover:text-foreground">Contact</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
