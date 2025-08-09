import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-emblem.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="ALFBAKE Home">
          <img src={logo} alt="ALFBAKE emblem logo" className="h-10 w-10" loading="eager" />
          <span className="font-heading text-lg tracking-widest">ALFBAKE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent"}>Home</NavLink>
          <NavLink to="/alfbake/ourstory" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent"}>Our Story</NavLink>
          <NavLink to="/alfbake/contact-us" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent"}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="hero" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border">
              <div className="mt-8 flex flex-col gap-6 text-lg">
                <Link to="/" className="hover:text-accent">Home</Link>
                <Link to="/alfbake/ourstory" className="hover:text-accent">Our Story</Link>
                <Link to="/alfbake/contact-us" className="hover:text-accent">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
